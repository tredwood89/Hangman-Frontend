import React from 'react';


const HintComponent = (props) => {


  return(

    <div>
       <button className={props.buttonClick ? "ui red disabled button" : "ui red button" } onClick={()=>props.handleHintButton()}>hint</button>
    </div>
  )

}


export default HintComponent;
