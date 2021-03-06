import React from 'react';
import Wordform from '../components/Wordform';
import axios from 'axios';
const url = process.env.REACT_APP_HOST

// const url = process.env.HOST + "/words"

class WordCrudContainer extends React.Component {

  createNewWordFetch = (input) => {

    let newWord = input
    let difficulty = this.setWordDifficulty(input)
    let newWordData = {
      "choice":`${newWord}`,
      "difficulty":`${difficulty}`
    }

    axios.post(url+"/words", newWordData)
      .then(response => {
        this.notifyWordSaved(response.data)
      })
    }

  notifyWordSaved = (obj) => {
    if (obj) {
      alert(obj.choice.toUpperCase()+" Added Successfully")
    }
  }

  setWordDifficulty = (word) => {
    if (word.length < 7) {
      return "easy"
    } else if (word.length > 6 && word.lenth < 11) {
        return "medium"
    } else {
          return "hard"
    }
  }



  render(){
    return(
      <div>

        <Wordform  addNewWord={this.createNewWordFetch}/>

      </div>
    )
  }
}


export default WordCrudContainer;
