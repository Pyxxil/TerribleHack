import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";
import isInternetWorking from "./isInternetWorking";
import StressRelief from "./StressRelief";
import howDoISpell from "./howdoispell";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/isInternetWorking" component={isInternetWorking} />
        <Route path="/StressRelief" component={StressRelief} />
        <Route path="/howdoispell" component={howDoISpell} />
      </Router>
    </div>
  );
}

export default App;
