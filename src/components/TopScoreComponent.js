import React from 'react';
const url = "http://localhost:4000/api/v1/topscores"




class TopScoreComponent extends React.Component {

  state = {

    bestscore:0,
    name:"",
    newTop:""
  }

    fetchTopScore = () => {
      fetch(url)
        .then((res)=>res.json())
        .then((topScore)=>{

          let name = topScore[0].name
          let bestScore = topScore[0].score

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

    handleClick = () =>{
      let name = this.state.newTop
      let newBestScore = this.props.wins
      let options = {
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json"
        },
        body:JSON.stringify( {"name":`${name}`,
                              "score":`${newBestScore}`} )
      }
      fetch(url+"/1",options)
        .then((res)=>res.json())
        .then((topscore)=>{
          let name = topscore.name
          this.setState({
            name,
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
