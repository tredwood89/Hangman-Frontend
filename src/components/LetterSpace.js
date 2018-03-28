import React from "react";
import uuid from "uuid"



class LetterSpace extends React.Component{



  render(){

    return(
      <div className="inline">

        <div  id={this.props.letter}  key={uuid()}
              className={this.props.value ? "noDash" : "dash"}>
              {this.props.letter}
        </div>

      </div>



    )
  }

}


export default LetterSpace;
