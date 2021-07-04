import React, { FormEvent, useState } from "react";

import "./styles.css";

const Create = () => {
  const [word, setWord] = React.useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    var sentence = ""
    for (var i = 0; i < word.length; i++) {
        // alert(word.charAt(i));
        var question = "?"
        var multiQuestion = question.repeat(Math.floor(Math.random() * 12) + 2)
        var searchWord = word.charAt(i) + multiQuestion
        const response = await fetch(`https://api.datamuse.com/words?sp=${searchWord}`)
        if (response.ok) {
            const jsonValue = await response.json();
            sentence += jsonValue[0].word.charAt(0).toUpperCase() + jsonValue[0].word.slice(1) + " "
          } else {
            return Promise.reject('*** PHP file not found');
          }
      }
    setStatus(sentence)

  };

  return (
    <div>
      <h1>What does my Acronym Stand For?</h1>
      <h2>Enter an Acronym:</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br></br>
        <button type="submit">Check Acronym</button>
      </form>
      <div className="spelling" id="status">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Create;
