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
        <Route path="/hydraPage" render={() => window.location.href = "/hydra_page.html"} />
        <Route path="/sypmtoms" render={() => window.location.href = "/SymptomsLetGo/index.html"} />
      </Router>
    </div>
  );
}

export default App;
