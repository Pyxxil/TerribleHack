import React, { useState } from 'react';
import './posting.css';

export default function Posting(){
  const API_URL = "https://backend-server-post-twitter.herokuapp.com";
  const [passwordGenerated, setPasswordGenerated] = useState("");
  const [identity, setIdentity] = useState("");
  const [isWaiting, setIsWaiting] = useState(true);

  const makeTweet = async (email: string, password: any) => {
    const account = {
      account: email,
      password: password
    }

    console.log(JSON.stringify(account))

    await fetch(API_URL + "/maketweet", {
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(account)
    })
  }

  const onClickHandler = async () => {
    let password: string = "";
    await fetch("https://makemeapassword.ligos.net/api/v1/passphrase/json?c=50&l=12", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data: any) => {
        password = data.pws[0];
      });

    let userInput: any = document.getElementById("identity");
    userInput = userInput.value;    
    password = password.replace(/ /g, "");

    let passwordArr = [password];

    console.log(passwordArr);


    if (userInput === "") {
      alert("Please enter the email address that will use this password");
      return;
    }

    setIdentity(userInput);
    setPasswordGenerated(password);
    setIsWaiting(false);
    makeTweet(userInput, passwordArr);
  }

  return (
    <div className = "posting-background">
      <h1 className = "h1-text">Please enter your email: <input className = "email-box" type="text" id = "identity" required /></h1>
      <div className = "generate-button-div"><p><button className = "generate-button" onClick = {onClickHandler}>Generate Password!</button></p>
        {isWaiting ? 
          <>Waiting for your email and password generation...</> 
          : 
          <h2>
            Password generated: <strong>{passwordGenerated}</strong>
          </h2>
        }
      </div>
    </div>
  );
}