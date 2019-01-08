import React from 'react';
import HintComponent from "../components/HintComponent";
import axios from 'axios';
const url = process.env.REACT_APP_WORDS_HOST


class DictionaryContainer extends React.Component {

  state = {
    buttonClick:false,
    showButton:false,
    definition:"",
    partOfSpeech:""
  }


  onButtonClick = () => {

    this.setState({
      buttonClick: !this.state.buttonClicked
      // showButton:{ btn ? false : true }
    })

    this.fetchDicitonary()
  }

  fetchDicitonary = () => {

    let word = this.props.lookUpWord
// `${word}/definitions`
    axios.get( url + word + "/definitions", {
    headers:{
      "X-Mashape-Key":process.env.REACT_APP_keycode,
      "X-Mashape-Host":"wordsapiv1.p.mashape.com"
    }
  })
  .then(response => {
    let pos = response.data.definitions[0].partOfSpeech
    let speech = pos ? pos : "n/a"
      //not all words have a designated PoS
      this.setState({
        definition: response.data.definitions[0].definition,
        partOfSpeech:speech
      })
    })

  }

  componentWillReceiveProps(props){
    if (this.props.showHint){
      this.setState({
        buttonClick:false
      })
    }
  }

  render(){

      let hintBox = <div>
                      <br></br>
                      <div className="ui compact segments">
                        <div className="ui compact segment">
                          <p>Definition: <strong>{this.state.definition}</strong></p>
                        </div>
                        <div className="ui compact segment">
                          <p>part of speech: <strong>{this.state.partOfSpeech}</strong></p>
                        </div>
                    </div>
                    <br></br>
                  </div>

    return(
      <div>
        {this.state.buttonClick ? hintBox : null }

        {this.props.showHint ?
        <HintComponent buttonClick={this.state.buttonClick} handleHintButton={this.onButtonClick}/> :
        null }

      </div>
    )
  }
}

export default DictionaryContainer;
