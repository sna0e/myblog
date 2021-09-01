import React, {useEffect, useState} from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./Home";
import MyColor from "./MyColor";
import MyStory from "./MyStory";
import AppRouter from "./Router";
import {authService} from "../fbase";

function App() {
  const[init, setInit] = useState(true);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } 
      setInit(true);
    });
  }, []);

  return (
    // <HashRouter>
    //   <Route path="/" exact={true} component={Home} />
    //   <Route path="/mycolor" component={MyColor} />
    //   <Route path="/mystory" component={MyStory} />
    // </HashRouter>
    <>
      {init ? 
      ( <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> )
      : 
      "initializing"}
    </>
  );
}

export default App;
