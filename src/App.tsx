import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";
import LmgtfySearchEngine from "./LmgtfySearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/lmgtfy-search-engine" component={LmgtfySearchEngine} />
      </Router>
    </div>
  );
}

export default App;
