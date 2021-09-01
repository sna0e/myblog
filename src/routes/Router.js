import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Nav from "../components/Nav";
import LogOut from "./LogOut";
import MyColor from "./MyColor";
import MyStory from "./MyStory";

const AppRouter = ( {isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Nav/>}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/logout">
              <LogOut />
            </Route>
            <Route exact path="/mycolor">
              <MyColor userObj={userObj}/>
            </Route>
            <Route exact path="/mystory">
              <MyStory userObj={userObj}/>
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;