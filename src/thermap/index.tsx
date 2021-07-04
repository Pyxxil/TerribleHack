import React, { useCallback, useEffect, useState } from "react";
import { geolocated, GeolocatedProps } from "react-geolocated";
import Warmer from "./Warmer.mp3";
import Colder from "./Colder.mp3";

import Search from "./Search";

import "./index.css";

const ThermApp = (props: GeolocatedProps) => {
  const [destination, setDestination] = useState(null);
  const [directing, setDirecting] = useState(false);
  const [audioSource, setAudioSource] = useState(Warmer);

  
  const startDirecting = () => {
    if (destination) {
      setDirecting(true)
    }
  };

  const stopDirecting = () => {
    setDirecting(false)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 2);
      const choice = [Warmer, Colder][random];
      setAudioSource(choice);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="thermapp-container">
      <div className="vertical-horizontal-center">
        <h1>Thermap</h1>
        <br />
        <Search 
          setDestination={(e) => {
            setDestination(e);
          }}
        />
        <br />

        {directing && destination ? 
        <div className="start-directing-button red" onClick={stopDirecting}>Stop directing</div>
        :
        <div className="start-directing-button green" onClick={startDirecting}>Start directing</div>
        }

        {destination && directing && <audio src={audioSource} autoPlay loop />}
      </div>
    </div>
  );
};

export default ThermApp;
