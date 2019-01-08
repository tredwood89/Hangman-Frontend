import React, { Component } from 'react';
import './App.css';
// import NavBar from "./components/NavBar"
import GameContainer from "./containers/GameContainer";
// import WordCrudContainer from "./containers/WordCrudContainer"
import DictionaryContainer from "./containers/DictionaryContainer"
// import HintComponent from "./components/HintComponent";
import TopScoreComponent from "./components/TopScoreComponent";
import TitleComponent from "./components/TitleComponent";
import WordCrudContainer from "./containers/WordCrudContainer"

class App extends Component {

  state = {

      word:"",
      showHint:false,
      wins:0
  }

  handleGetDefinition = (word) => {
    this.setState({
      word:word,
      showHint: !this.state.showHint
    })
  }

  resetDictionary = () => {
    this.setState({
      word:"",
      showHint:false
    })
  }

  tallyWins = (val) => {
    if (val === "win"){
      let wins = this.state.wins+1
      this.setState({
        wins
      })

    } else {
      let wins=0
      this.setState({
        wins
      })
    }
  }

  setWinState = () => {
    return this.state.wins
  }

  render() {

    return (
      <div>
        <TitleComponent />

        <div className="ui container">
          <div>
            <TopScoreComponent wins={this.state.wins}/>
          </div>
          <div>
            <GameContainer   tallyRecord={this.tallyWins}resetDictionaryHint={this.resetDictionary} getDefinition={this.handleGetDefinition}/>
          </div>
            <DictionaryContainer showHint={this.state.showHint}lookUpWord={this.state.word}/>
        </div>


        <WordCrudContainer/>
      </div>
    );
  }
}

export default App;
