import React from 'react';
import axios from 'axios';
const url = "http://localhost:4000/api/v1/topscores"




class TopScoreComponent extends React.Component {

  state = {

    bestscore:0,
    name:"",
    newTop:""
  }

    fetchTopScore = () => {
      axios.get(url)
        .then(response => {
          let name = response.data[0].name
          let bestScore = response.data[0].score

          this.setState({
                name,
                bestScore
              })
        })

    }


    handleOnChange = (event) => {
      let newTop = event.target.value

      this.setState({
          newTop
      })
    }

    handleClick = () => {
      let name = this.state.newTop
      let newBestScore = this.props.wins
      let topScoreData = {
        "name":`${name}`,
        "score":`${newBestScore}`
      }
  
      axios.patch(url+"/1", topScoreData)
        .then(response => {
          console.log(response);
          this.setState({
                name: response.data.name,
                bestScore:newBestScore
              })
        })

    }

    checkNewTopScore=()=>{
      let prevScore = this.props.wins
      let currentScore = this.state.bestScore
      return (prevScore > currentScore ? true : false)
    }

    componentDidMount(){
      this.fetchTopScore()
    }

  render(){

    return (
      <div >
        <div className= "ui compact segment">
          <div>
          <div>
            <p>Current Win Streak: <strong>{this.props.wins}</strong> {this.state.bestScore===1?"win":"wins"}</p>
            <p>Top Streak Holder: <strong>{this.state.name}</strong></p>
            <p>Longest Streak: <strong>{this.state.bestScore ? this.state.bestScore : "0"}</strong> wins </p>
          </div>
          { this.checkNewTopScore() ?
            <div className = "ui input">
              <input  type="text" placeholder="enter name" onChange={this.handleOnChange}></input>
              <button className="ui button" type="submit" onClick={this.handleClick}>submit</button>
            </div> :
            null}
          </div>
       </div>
      </div>
    )
  }
}


export default TopScoreComponent;
