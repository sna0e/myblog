import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import MyColor from "./routes/MyColor";
import MyStory from "./routes/MyStory";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/mycolor" component={MyColor} />
      <Route path="/mystory" component={MyStory} />
    </HashRouter>
  );
}

export default App;
