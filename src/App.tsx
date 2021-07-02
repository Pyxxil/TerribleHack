import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";
import Posting from './publicPosting/Posting';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/publicPosting" component={Posting} />
      </Router>
    </div>
  );
}

export default App;
