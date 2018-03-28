import React from "react";
import alphabet from "../alphabet"
import uuid from "uuid"


class AlphabetButton extends React.Component{

    state = {

      buttonState:{}
    }

   handleClick = (event) => {
     let buttonLetterValue = event.target.value
     let buttonState = {...this.state.buttonState}
      buttonState[buttonLetterValue]=true
        this.setState({
          buttonState
        },()=>this.props.handleAlphabetButton(buttonLetterValue))
   }

   showAlphabet = (array) => {
    return array.map((letter)=>{
      return <button  onClick={(e)=>this.handleClick(e)} value={letter}
              key={uuid()} className={this.state.buttonState[`${letter}`]?"mini ui disabled button":"mini ui button"}>
              {letter}
             </button>
      })
    }

    resetState = () => {
      if(this.props.resetOn===""){
        this.setState({
          buttonState:{}
        })
      }
    }

    componentWillReceiveProps(props){
      this.resetState()
    }

  render(){
    return (
        <div>

          <div>{this.showAlphabet(alphabet.rowOne)}</div>
          <br></br>
          <div>{this.showAlphabet(alphabet.rowTwo)}</div>
        </div>
      )
    }
}


export default AlphabetButton;
