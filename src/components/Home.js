import React from "react";
import {NavLink} from 'react-router-dom'
const Home=()=>{
    return(
    <nav className="home-div">
       
        <div className="ui-button">
            <button className="btn"><NavLink to="/home">Home</NavLink></button>
            <div className="btn-div">
            <button className="btn"><NavLink to="/viewtodo">ViewToDo</NavLink></button>
            <button className="btn"><NavLink to="/addtodo">AddToDoForm</NavLink></button>
            <button className="btn"><NavLink to="/signupform">SignUpForm</NavLink></button>
            </div>
           
        </div>
    </nav>
    )}
export default Home;