import React, { useState } from "react";
import "./styles.css";
import Ducky from "./ducky.png";
import NiceDucky from "./nice-ducky.png";

const MESSAGES = [
  "That's not how you do it",
  "You're doing it wrong",
  "Just do it correctly",
  "Don't be stupid",
  "Use your brain",
  "What are you doing? Are you dumb?",
  "Stop being stupid",
  "What the quack is that?????",
  "You're explaining it wrong",
  "Can you please speak english?!",
  "What langauge are you speaking?!?",
  "Can you explain it properly?!?!?!?",
  "I don't understand you",
  "You should change jobs",
  "A five year-old could explain it better than you",
  "How did you mess that up?!",
  "You gotta beak-idding me!",
  "You absolute flappin' moron",
  "Stop doing it wrong, and just do it right",
  "You did what?! Alright, I'm changing my career",
];

const Search = () => {
  const [message, setMessage] = useState("YOU STUPID PERSON");
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState<number>();

  const StartDebugging = () => {
    if (timer) clearInterval(timer);
    setTimer(setInterval(RandomMessage, 2000));
    setIsLoading(false);
  };

  const StopDebugging = () => {
    if (timer) clearInterval(timer);
    setTimer(undefined);
    setIsLoading(true);
  };

  const RandomMessage = () => {
    const num: number = Math.floor(Math.random() * MESSAGES.length);
    const message: any = MESSAGES[num].toUpperCase();
    setMessage(message);
  };

  return (
    <div>
    <img src={isLoading ? NiceDucky : Ducky } />
    <div className="speech-bubble">
      {isLoading ? (
        <div className="message">
          <button className="start-debug" onClick={StartDebugging}>
            Start Debugging
          </button>
          <br />
          <h1>Hello! I'm a helpful rubber duck, talk me for useful advice!</h1>
        </div>
      ) : (
        <div className="message">
          <button className="stop-debug" onClick={StopDebugging}>
            Stop Debugging
          </button>
          <br />
          <h1>{message}</h1>
        </div>
      )}
    </div></div>
  );
};

export default Search;
