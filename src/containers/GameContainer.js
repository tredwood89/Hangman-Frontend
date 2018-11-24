import React from 'react';
import LetterSpace from "../components/LetterSpace";
import AlphabetButton from "../components/AlphabetButton";
import StrikeComponent from "../components/StrikeComponent"
// import HintComponent from "../components/HintComponent";
import uuid from "uuid"
import axios from 'axios';

const url = "https://hangman-react-backend.herokuapp.com/api/v1/words"

class GameContainer extends React.Component {

    state = {
      word:"",
      letterState:{},
      strike:0,
      win:null
    }

    resetState = () => {
      this.props.resetDictionaryHint()
      this.setState({
        word:"",
        letterState:{},
        strike:0,
        win:null
      }, ()=>this.fetchNewWord())
    }

    fetchNewWord = () => {
      axios.get(url)
        .then(response => {
          let totalWordEntries = response.data.length
          let randomWord = response.data[Math.floor(Math.random()*totalWordEntries)].choice;
          this.props.getDefinition(randomWord);
          this.setState({
            word:randomWord
          },()=>this.makeState(randomWord))
        })
    }


     makeState = (word) => {
      let wordArr = word.split("")

      let letterState = {}
        wordArr.forEach(letter => {
          letterState[letter]=false
        })

          this.setState({
            letterState
          })
    }

    handleAlphabetClick = (letter) => {
      // console.log(this.state.letterState);
      // console.log(this.state.letterState[letter]===false);
      if (this.state.letterState[letter]===false) {

        let letterState = { ...this.state.letterState}

          letterState[letter] = true;
        this.setState({
            letterState
        },()=>this.checkStateForWin())

      } else {
          this.setState({
            strike: this.state.strike+1
          },()=>this.checkStateForLost())

      }
    }
          checkStateForLost = ()=> {

            if (this.state.strike === 6 ){
              console.log('game over');
              let letterState = this.changeLetterStateToTrue(this.state.letterState)


              this.setState({
                letterState: letterState,
                win: false
              }, ()=>this.props.tallyRecord("lose"))
            }
          }

          checkStateForWin = () => {
            let letterState = this.state.letterState
            let values = Object.values(letterState).every(item => item === true)
              if (values) {
                this.setState({
                  win:true
                },()=>this.props.tallyRecord("win"))
              }
          }

    changeLetterStateToTrue = (state) => {
      let obj = {...state}
      Object.keys(obj).forEach((key) => { obj[key] = true });
      return obj
    }


    winOrLose = (value) => {

      if (value === true){

        return <div className="gameOver">
                 <div className="ui  segment">
                   <h2 className="ui blue header">WAY TO GO !!!</h2>
                     <p className="overMsg"><strong>game over</strong></p>
                 </div>
               </div>
      } else if (value === false){

        return <div className="gameOver">
                 <div className="ui segment">
                   <h2 className="ui red header">BETTER LUCK NEXT TIME</h2>
                    <p className="overMsg"><strong>game over</strong></p>
               </div>
               </div>
       }
    }
     // || this.gameOver()

    render(){
        let wordArr = this.state.word.split("")
          let letterSpaces = wordArr.map((letter)=>{
            return <LetterSpace key={uuid()}  value={this.state.letterState[`${letter}`] }
                                letter={letter}/>
          })
// this.state.win
      return(
        <div>
          <br></br>
          <button className="ui big green button" onClick={this.resetState}>Start New Game</button>
            <div className="strike">
              <StrikeComponent strike={this.state.strike} />
            </div>
          {letterSpaces}
          <AlphabetButton  resetOn={this.state.word} handleAlphabetButton={this.handleAlphabetClick}/>
          <br></br>
          <div>

            {this.winOrLose(this.state.win)}
          </div>
        </div>
      )

    }
}



export default GameContainer;
