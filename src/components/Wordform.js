import React from 'react'

class Wordform extends React.Component {

  state = {
    wordInput:""
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
    if (this.validateWord(wordInput)){
        alert("Re-enter word without special characters")
      } else {
        this.props.addNewWord(wordInput)
    }
  }


  validateWord = (input) => {
    let format = /[!@#$%^&* ()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(input)){
      return true
    } else {
      return false
    }
  }


  render(){
    return(
      <div>
        <div className="ui container">
          <form className="ui form">
            <div className="field">
              <label>Whats the Word?</label>
              <input type="text" placeholder="enter word" onChange={(e)=>this.handleWordChange(e)}></input>
              <button className="mini ui button" type="submit" onClick={(e)=>this.handleClick(e)}>Add Word</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Wordform;
