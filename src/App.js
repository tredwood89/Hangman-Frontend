import React, { Component } from 'react';
import './App.css';
// import NavBar from "./components/NavBar"
import GameContainer from "./containers/GameContainer";
// import WordCrudContainer from "./containers/WordCrudContainer"
import DictionaryContainer from "./containers/DictionaryContainer"
// import HintComponent from "./components/HintComponent";
import { Route, Link } from "react-router-dom";
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
  // <div align="center">
  //   <Link to="addword">Add New Word</Link>
  //     <Route path="/addword" component={WordCrudContainer}/>
  //
  // </div>
  render() {

    return (
      <div>
        <TitleComponent />



        <div className="ui container">
            <TopScoreComponent wins={this.state.wins}/>
            <GameContainer   tallyRecord={this.tallyWins}resetDictionaryHint={this.resetDictionary} getDefinition={this.handleGetDefinition}/>

            <DictionaryContainer showHint={this.state.showHint}lookUpWord={this.state.word}/>
        </div>


        <WordCrudContainer/>
      </div>
    );
  }
}

export default App;
