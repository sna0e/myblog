import React, {component} from "react";
import MyCalendar from "./MyCalendar";
import "./MyColorComponent.css";
import ColorButton from "./ChooseColor";

function MyColorComponent (){
    return (
        <div className="outline_box">
            <h2 className="mycolor_title">나의 하루 색</h2>
            <ColorButton className="color"/>
        </div>
    );
}


export default MyColorComponent;