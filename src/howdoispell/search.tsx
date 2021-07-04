import React, { FormEvent, useState } from "react";

import "./styles.css";

const Search = () => {
  const [word, setWord] = React.useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
      .then((resp) => {
        if (resp.status < 400) setStatus("Yeah, that's correct!");
        else setStatus("Not like that");
      })
      .catch(() => {
        setStatus("Not like that");
      });
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
        <br />
        <button type="submit">Check Spelling</button>
      </form>
      <div className="spelling" id="status">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default Search;
