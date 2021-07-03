import React, { FormEvent } from "react";

import myData from "./words_dictionary.json";
import "./styles.css";

const Search = () => {
  const [word, setWord] = React.useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const status = document.getElementById("status");
    if (!status) return;

    if (word in myData) {
      status.innerHTML = "<p>Yeah, it's correct</p>";
    } else {
      status.innerHTML = "<p>Word does not exist</p>";
    }
  };

  return (
    <div>
      <h1>Welcome to How Do I Spell?</h1>
      <h2>Enter a word:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <br></br>
        <button type="submit">Check Spelling</button>
      </form>
      <div id="status"></div>
    </div>
  );
};

export default Search;
