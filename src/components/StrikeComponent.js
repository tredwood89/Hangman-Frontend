import React from 'react';
import Hangmanpics from "../Hangmanpics"


const StrikeComponent = (props) => {


  return(
    <div>
      <img alt="hangmanProgression" src={Hangmanpics[`strike${props.strike}`]}></img>
    </div>
  )
}


export default StrikeComponent;
