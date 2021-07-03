import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThermApp from "./thermapp";
// import Hydra from "./hydra_page";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/thermapp" component={ThermApp} />
        <Route path="/hydra_page" render={() => window.location.href = "/hydra_page.html"} />"
      </Router>
    </div>
  );
}

export default App;
