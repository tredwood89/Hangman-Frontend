import React from 'react';
import Wordform from '../components/Wordform';
import axios from 'axios';

const url = 'http://localhost:4000/api/v1/words'
// const url = process.env.HOST + "/words"
// const url = "https://hangman-react-backend.herokuapp.com/api/v1/words"

class WordCrudContainer extends React.Component {

  createNewWordFetch = (input) => {

    let newWord = input
    let difficulty = this.setWordDifficulty(input)
    let newWordData = {
      "choice":`${newWord}`,
      "difficulty":`${difficulty}`
    }

    axios.post(url, newWordData)
      .then(response => {
        this.notifyWordSaved(response.data)
      })
    }

  notifyWordSaved = (obj) => {
    if (obj) {
      alert(obj.choice.toUpperCase()+" Added Successfully")
      // this.componentWillUnMount(console.log("unmounted"))
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
