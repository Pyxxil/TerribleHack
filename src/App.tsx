import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";
import isInternetWorking from "./isInternetWorking";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/isInternetWorking" component={isInternetWorking} />
      </Router>
    </div>
  );
}

export default App;
