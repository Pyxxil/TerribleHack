import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";

import LazySearch from "./lazysearch";
import isInternetWorking from "./isInternetWorking";
import StressRelief from "./StressRelief";
import publicAge from "./publicAge";
import CondescendingRubberDuck from "./CondescendingRubberDuck";
import howDoISpell from "./howdoispell";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/hydra_page" render={() => window.location.href = "/hydra_page.html"} />"
        <Route path="/lazysearch" component={LazySearch} />
        <Route path="/isInternetWorking" component={isInternetWorking} />
        <Route path="/StressRelief" component={StressRelief} />
        <Route path="/publicAge" component={publicAge}/>
        <Route path="/rubberducky" component={CondescendingRubberDuck} />
        <Route path="/howdoispell" component={howDoISpell} />
      </Router>
    </div>
  );
}

export default App;
