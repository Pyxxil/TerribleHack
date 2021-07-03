import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./HomePage";
import ThermAp from "./thermap";
import LazySearch from "./lazysearch";
import isInternetWorking from "./isInternetWorking";
import StressRelief from "./StressRelief";
import LecturerPage from "./Email-Lecturer";
import Age from "./publicAge";
import CondescendingRubberDuck from "./CondescendingRubberDuck";
import howDoISpell from "./howdoispell";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/thermap" component={ThermAp} />
        <Route
          path="/hydraPage"
          render={() => (window.location.href = "/hydra_page.html")}
        />
        <Route
          path="/sypmtoms"
          render={() => (window.location.href = "/SymptomsLetGo/index.html")}
        />
        <Route path="/lazysearch" component={LazySearch} />
        <Route path="/isInternetWorking" component={isInternetWorking} />
        <Route path="/StressRelief" component={StressRelief} />
        <Route path="/EmailLecturer" component={LecturerPage} />
        <Route path="/publicAge" component={Age} />
        <Route path="/rubberducky" component={CondescendingRubberDuck} />
        <Route path="/howdoispell" component={howDoISpell} />
      </Router>
    </div>
  );
}

export default App;
