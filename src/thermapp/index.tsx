import React, { useEffect, useState } from "react";

import Search from "./Search";

const API_KEY = import.meta.env.VITE_MAPQUEST_API_KEY;

const measureRoute = async (
  from: GeolocationPosition,
  to: { lat: number; lon: number }
): Promise<number> => {
  const resp = await fetch(
    `http://open.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${from.coords.latitude},${from.coords.longitude}&to=${to.lat},${to.lon}`
  );
  const json = await resp.json();
  const distance = json.route?.legs?.[0].distance ?? -1;

  return distance;
};

const ThermApp = () => {
  const [destination, setDestination] = useState(null);
  const [warmth, setWarmth] = useState("Neutral");
  const [distance, setDistance] = useState(0);
  const [location, setLocation] = useState<GeolocationPosition | undefined>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLocation, (err) => {
      console.debug("THERE WAS AN ERROR", err);
    });

    const watcher = navigator.geolocation.watchPosition(
      async (position) => {
        if (position && destination) {
          const dist = await measureRoute(position, destination as any);
          setDistance(dist);
          if (dist < distance) setWarmth("Warmer");
          else if (dist === distance) setWarmth("Neutral");
          else setWarmth("Colder");
        }

        setLocation(position);
      },
      () => {},
      {
        enableHighAccuracy: true,
        maximumAge: Infinity,
        timeout: 1000,
      }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  useEffect(() => {
    setWarmth("Neutral");
  }, [destination]);

  console.debug(location, distance, destination);

  return (
    <>
      <Search
        setDestination={(e) => {
          setDestination(e);
        }}
      />

      {destination && <>{warmth}</>}
    </>
  );
};

export default ThermApp;
