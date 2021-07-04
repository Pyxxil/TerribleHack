import React, { useState } from 'react';

export default function Posting(){
  const [passwordGenerated, setPasswordGenerated] = useState("");
  const [identity, setIdentity] = useState("");
  const [isWaiting, setIsWaiting] = useState(true);

<<<<<<< HEAD
  const makeTweet = async (email: string, password: string) => {

=======
  const makeTweet = async () => {
    
>>>>>>> 9b59352... anythin1
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
        password = data.pws;
      });

    let userInput: any = document.getElementById("identity");
    userInput = userInput.value;

    if (userInput === "") {
      alert("Please enter the email address that will use this password");
      return;
    }

    setIdentity(userInput);
    setPasswordGenerated(password);
    setIsWaiting(false);
    makeTweet(userInput, password);
  }

  return (
    <>
      Enter your email: <input type="text" id = "identity" required />
      <p><button onClick = {onClickHandler}>Here</button></p>

      {isWaiting ? 
        <>Waiting for your email and password generation...</> 
        : 
        <div>
          Password generated: <strong>{passwordGenerated}</strong>
        </div>
      }
    </>
  );
}