import React from 'react';
import Wordform from '../components/Wordform';
import NavBar from "../components/NavBar";

const url = "http://localhost:4000/api/v1/words"

class WordCrudContainer extends React.Component {

  createNewWordFetch = (input) => {


    console.log(input);
    let newWord = input
    let difficulty = this.setWordDifficulty(input)
    console.log(difficulty);
    let options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
         Accept: "application/json"
      },
      body:JSON.stringify({
        "word":{
          "choice":`${newWord}`,
          "difficulty":`${difficulty}`
        }
      })
    }

    fetch(url,options)
      .then((res)=>res.json())
      .then((json)=>this.notifyWordSaved(json))
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
