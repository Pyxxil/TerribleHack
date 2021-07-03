import React, { useState } from "react";
import Loading from "react-loading-bar";

import "react-loading-bar/dist/index.css";
import "react-loading-bar/dist/index.css";

import "./style/styles.css";

const Age = () => {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState("");
  const [demo, setDemo] = useState("");

  const onShow = () => {
    setShow(true);

    setDemo("Searching all of humanity...");

    setTimeout(() => {
      setShow(false);
      setDemo("Everyone your age is " + age);
    }, 3000);
  };

  return (
    <div className="age">
      <Loading show={show} color="green" />
      <h1>Find out how old everyone your age is</h1>
      <form>
        <label>Enter Your Age</label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Your age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="button" value="Submit" onClick={onShow} />
      </form>
      <h1 id="demo">{demo}</h1>
    </div>
  );
};

export default Age;
