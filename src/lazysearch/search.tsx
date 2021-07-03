import React, { useState } from "react";
import "./styles.css";

const Search = () => {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const GenerateLink = () => {
    var userInput = document.getElementById("search") as HTMLInputElement;
    var userInputStr = userInput.value.toString();
    if (userInputStr != "") {
      var encodedInput = encodeURIComponent(userInputStr);
      setLink("https://lmgtfy.app/?q=" + encodedInput);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <div>
      <h1>Lazy Search</h1>
      <span>
        <input type="text" id="search" className="user-input" required />
        <button onClick={GenerateLink}>
          <i className="fas fa-search"></i>
        </button>
        <br />
      </span>
      {isLoading ? <></> : <a href={link}>Heres what I found!</a>}
    </div>
  );
};

export default Search;
