import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./HomePage"
import ThermApp from "./thermapp";
import LazySearch from "./lazysearch";
import isInternetWorking from "./isInternetWorking";
import StressRelief from "./StressRelief";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/lazysearch" component={LazySearch} />
        <Route path="/isInternetWorking" component={isInternetWorking} />
        <Route path="/StressRelief" component={StressRelief} />
      </Router>
    </div>
  );
}

export default App;
