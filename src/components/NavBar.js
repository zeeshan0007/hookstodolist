import React from "react";
import {NavLink} from 'react-router-dom'
const NavBar=()=>{
    return(
    <nav className="ui raised very padded segment">
       
        <div className="ui right floated header">
            <button className="ui button"><NavLink to="/home">Home</NavLink></button>
            <button className="ui button"><NavLink to="/viewtodo">ViewToDo</NavLink></button>
            <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>
        </div>
    </nav>
    )}
export default NavBar;