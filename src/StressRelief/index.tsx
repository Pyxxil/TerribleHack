import React, { useState } from "react";

import "./index.css";

const StressRelief = () => {
  var [ people, setPeople ] = useState([
    "Antonio Arellano",
    "Karla Wyatt",
    "Wade Heath",
    "Toney Cherry",
    "Leonor Mcneil",
    "Zelma Tate",
    "Jarvis Ibarra",
    "Muriel Wilson"
  ])

  function fireSomeone() {
    const index = Math.floor(Math.random() * people.length);
    const unlucky_person = people.splice(index, 1)[0];
    const element = document.getElementById("fired");
    if (element) {
      if (unlucky_person) {
        element.innerText = "You just fired " + unlucky_person + "!";
      }
      else {
        element.innerText = "You just fired yourself!";
      }
    }
    setPeople([ ...people ])
    console.log(index)
    console.log(people)
  }

  return <div className="stress-relief">
    <h1>Welcome to StressRelief!</h1>
    <br></br>
    <div className="container1">
      <h2>You are managing {people.length} people.</h2>
      <h3>Staff</h3>
      <ul>
      {people.map((item) => (
        <li key={item}>{item}</li>
      ))}
      </ul>
    </div>
    <div>
      <h2>Feeling stressed?  Press this button!</h2>
      <a className="button" onClick={fireSomeone}></a>
      <h3 id="fired"></h3>
    </div>
  </div>;
};

export default StressRelief;
