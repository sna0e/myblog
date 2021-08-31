import React from "react";
import axios from "axios";
import Title from "../components/Title";
import Bar from "../components/Bar";
import MyColorComponent from "../components/MyColorComponent";
import "./Style.css";

function MyColor() {
    return (
      <div>
          <Title className="title"/>
          <hr className="divi"/>
          <div className="components_container">
            <Bar />
            <MyColorComponent />
          </div>
      </div>
    );
}

export default MyColor;