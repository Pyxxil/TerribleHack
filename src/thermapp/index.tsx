import React, { useCallback, useEffect, useState } from "react";
import { geolocated, GeolocatedProps } from "react-geolocated";
import Warmer from "./Warmer.mp3";
import Colder from "./Colder.mp3";

import Search from "./Search";

const ThermApp = (props: GeolocatedProps) => {
  const [destination, setDestination] = useState(null);
  const [audioSource, setAudioSource] = useState(Warmer);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3);
      const choice = [Warmer, Colder, Colder][random];
      setAudioSource(choice);
    }, 1000);

    return () => clearInterval(interval);
  });

  console.debug(audioSource);

  return (
    <>
      <Search
        setDestination={(e) => {
          setDestination(e);
        }}
      />

      {destination && <audio src={audioSource} autoPlay loop />}
    </>
  );
};

export default ThermApp;
