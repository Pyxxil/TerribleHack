import React, { FormEvent, useState } from "react";

import myData from "./words_dictionary.json";
import "./styles.css";

const Search = () => {
  const [word, setWord] = React.useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (word in myData) {
      setStatus("Yeah, that's correct!");
    } else {
      setStatus("Not like that");
    }
  };

  return (
    <div>
      <h1>How Do I Spell?</h1>
      <h2>Enter a word:</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br></br>
        <button type="submit">Check Spelling</button>
      </form>
      <div className="spelling" id="status">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Search;
