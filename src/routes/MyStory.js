import React from "react";
import axios from "axios";
import Title from "../components/Title";
import Bar from "../components/Bar";
import MyStroyComponent from "../components/MyStroyComponent";
import "./Style.css";

function MyStory() {
    return (
      <div>
          <Title className="title"/>
          <hr className="divi"/>
          <div className="components_container">
            <Bar />
            <MyStroyComponent />
          </div>
      </div>
    );
}

export default MyStory;