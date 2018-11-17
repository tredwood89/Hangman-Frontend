import React from 'react';
import { Route, Link } from "react-router-dom";
// import GameContainer from "../containers/GameContainer";
import WordCrudContainer from "../containers/WordCrudContainer";

const NavBar = (props) => {


// <Link to="home"> | Home</Link>
// <Route path="/home" component={GameContainer} />

  return(
    <div >
      <Link to="addword">Add New Word</Link>
      <Route path="/addword" component={WordCrudContainer}/>

  </div>
  )

}



export default NavBar
