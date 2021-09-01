import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../routes/LogOut";
import "./Nav.css";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link>
      </li>
      <li> | </li>
      <li>
        <LogOut />
      </li>
    </ul>
  </nav>
);
export default Navigation;