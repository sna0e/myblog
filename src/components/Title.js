import React, {component} from "react";
import "./Title.css";
import {Link} from "react-router-dom";

function Title (){
    return (
        <div>
            <div className="title"><h1><Link to="/" style={{textDecoration:"none", color:"black"}}>What is your color today?</Link></h1></div>
        </div>
    );
}


export default Title;