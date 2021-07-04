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
import toDoneList from "./toDoneList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/thermap" component={ThermAp} />
        <Route
          path="/hydra"
          render={() => (window.location.href = "/hydra_page.html")}
        />
        <Route
          path="/sypmtoms"
          render={() => (window.location.href = "/symptoms.html")}
        />
        <Route
          path="/qwikmaffs"
          render={() => (window.location.href = "/quik_maffs.html")}
        />
        <Route path="/lazysearch" component={LazySearch} />
        <Route path="/isinternetworking" component={isInternetWorking} />
        <Route path="/stressrelief" component={StressRelief} />
        <Route path="/emaillecturer" component={LecturerPage} />
        <Route path="/publicage" component={Age} />
        <Route path="/rubberducky" component={CondescendingRubberDuck} />
        <Route path="/howdoispell" component={howDoISpell} />
        <Route path="/toDoneList" component={toDoneList} />
      </Router>
    </div>
  );
}

export default App;
