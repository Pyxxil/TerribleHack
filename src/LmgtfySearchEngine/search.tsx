import React, { useState } from "react";
import './styles.css';

const Search = () => {
    const [link, setLink] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const GenerateLink =() => {
        var userInput = document.getElementById("search") as HTMLInputElement;
        var encodedInput = encodeURIComponent(userInput.value.toString());
        setLink("https://lmgtfy.app/?q=" + encodedInput);
        setIsLoading(false);
    }
    
    return (
        <div className="lmgtfy">
            <h1>Lazy Search Engine</h1>
            <input type="text" id="search" className="user-input" required />
            <button onClick={ GenerateLink }>Search</button><br></br>
            { 
                isLoading 
                ? <></>
                : <a href={ link }>Heres what I found!</a>
            }
        </div>
    );
};

export default Search;
