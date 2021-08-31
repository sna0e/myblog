import React, {component} from "react";
import "./Bar.css";
import profile_img from "./profile.png"
import {Link} from "react-router-dom";

function Bar (){
    return (
        <div className="container">
            <div className="profile_img">
                <img width="100%" height="100%" src={profile_img} alt="profile_img"/>
            </div>
            <div className="name">sna0e</div>
            <button className="edit_profile">프로필 수정</button>
            <hr className="divHr"></hr>
            <div className="menu">
                <li><Link to = "/mycolor"
                 style={{textDecoration:"none", color:"black"}}>
                  나의 하루 색
                  </Link></li>
                <li><Link to = "/mystory" 
                 style={{textDecoration:"none", color:"black"}}>
                  나의 하루 이야기
                  </Link></li>
            </div>
        </div>
    );
}


export default Bar;