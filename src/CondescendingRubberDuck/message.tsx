import React, { useState } from "react";
import "./styles.css";

const Search = () => {
  const [message, setMessage] = useState("YOU STUPID PERSON");
  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(-1);

  const StartDebugging = () => {
    if (timer !== -1) clearInterval(timer);
    setTimer(setInterval(RandomMessage, 2000));
    setIsLoading(false);
  };

  const StopDebugging = () => {
    if (timer !== -1) clearInterval(timer);
    setIsLoading(true);
  };

  const RandomMessage = () => {
    var messages: string[] = [
      "That's not how you do it",
      "You're doing it wrong",
      "Just do it correctly",
      "Don't be stupid",
      "Use your brain",
      "What are you doing? Are you dumb?",
      "Stop being stupid",
      "What the heck is that?????",
      "You're explaining it wrong",
      "Can you please speak english?!",
      "What langauge are you speaking?!?",
      "Can you explain it properly?!?!?!?",
      "I don't understand you",
      "You should change jobs",
      "A five year-old could explain it better than you",
      "How did you mess that up?!",
    ];
    var num: number = Math.floor(Math.random() * messages.length);
    var message: any = messages[num].toUpperCase();
    setMessage(message);
  };
  return (
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
    </div>
  );
};

export default Search;
