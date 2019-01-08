import React from 'react'

class Wordform extends React.Component {

  state = {
    wordInput:"",
    displayWordInput:false
  }

  handleWordChange = (event) => {
    event.preventDefault()
    let wordInput = event.target.value
    this.setState({
      wordInput
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    let wordInput = this.state.wordInput
    if (!this.state.displayWordInput){
      this.setState({
        displayWordInput: !this.state.displayWordInput
      })

      return;
    }
    if (!this.isValidWord(wordInput)){
        alert("Re-enter word without special characters")
      } else {

        this.setState({
          displayWordInput: !this.state.displayWordInput,
          wordInput: ""
        }, this.props.addNewWord(wordInput) )
    }

  }


  isValidWord = (input) => {
    let format = /[!@#$%^&* ()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(input)){
      return false
    } else {
      return true
    }
  }


  render(){
    let shouldDisplayInput = this.state.displayWordInput ?
    ( <div>
       <label>Whats the Word?</label>
       <input type="text" placeholder="enter word" onChange={(e)=>this.handleWordChange(e)}></input>
     </div> )   :
    null

    return(
      <div>
        <div className="ui container">
          <form className="ui form">
            <div className="field">
              {shouldDisplayInput}

              <button className="mini ui button" type="submit" onClick={(e)=>this.handleClick(e)}>Add Word</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Wordform;
