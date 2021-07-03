import React, { useEffect } from "react";
import myData from "./words_dictionary.json";
import "./styles.css";

const Search = () => {
  const [word, setWord] = React.useState("");

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    if (word in myData) {
      document.getElementById("status").innerHTML = "<p>Yeah, it's correct</p>";
    } else {
      document.getElementById("status").innerHTML =
        "<p>Word does not exist</p>";
    }
    event.preventDefault();
  };

  return (
    <div>
      <h1>Welcome to How Do I Spell?</h1>
      <h2>Enter a word:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={handleChange} />
        <br></br>
        <button type="submit">Check Spelling</button>
      </form>
      <div id="status"></div>
    </div>
  );
};

export default Search;
