import React from 'react';
import keycode from "../keycode"
import HintComponent from "../components/HintComponent";



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
    console.log(word);
    let options = {
      headers:{
        "X-Mashape-Key":keycode,
        "Accept": "application/json",
        "X-Mashape-Host":"wordsapiv1.p.mashape.com"
      }
    }
    fetch(`https://wordsapiv1.p.mashape.com/words/${word}/definitions`,options)
    .then((res)=>res.json())
    .then((wordInfo)=> {
      let define = wordInfo.definitions[0].definition
      let pos = wordInfo.definitions[0].partOfSpeech
      let speech = pos ? pos : "n/a"


      this.setState({
        definition:define,
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
