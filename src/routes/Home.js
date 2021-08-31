import React from "react";
import axios from "axios";
import Title from "../components/Title";
import Bar from "../components/Bar";
import ShowColor from "../components/ShowColor";
import "./Style.css";

function Home() {
    return (
      <div>
          <Title className="title"/>
          <hr className="divi"/>
          <div className="components_container">
            <Bar />
            <ShowColor/>
          </div>
      </div>
    );
  }
  
  export default Home;
  