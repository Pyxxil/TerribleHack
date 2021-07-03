import React, { useCallback, useEffect, useState } from "react";
import { geolocated, GeolocatedProps } from "react-geolocated";

import Search from "./Search";

const API_KEY = import.meta.env.VITE_MAPQUEST_API_KEY;

const measureRoute = async (
  from: { latitude: number; longitude: number },
  to: { lat: number; lon: number }
): Promise<number> => {
  const resp = await fetch(
    `https://open.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${from.latitude},${from.longitude}&to=${to.lat},${to.lon}`
  );
  const json = await resp.json();
  const distance = json.route?.distance ?? -1;

  console.debug("DISTANCE", distance);

  return distance;
};

const ThermApp = (props: GeolocatedProps) => {
  const [destination, setDestination] = useState(null);
  const [warmth, setWarmth] = useState("Neutral");
  const [distance, setDistance] = useState(0);

  console.debug(props);

  useEffect(() => {
    setWarmth("Neutral");
    if (destination && props.coords) {
      measureRoute(props.coords, destination as any)?.then(setDistance);
    }
  }, [destination]);

  useEffect(() => {
    if (destination && props.coords) {
      measureRoute(props.coords, destination as any)?.then((dist) => {
        if (dist < distance) setWarmth("Warmer");
        else if (dist === distance) setWarmth("Neutral");
        else setWarmth("Colder");

        setDistance(dist);
      });
    }
  }, [props.coords]);

  return (
    <>
      <Search
        setDestination={(e) => {
          setDestination(e);
        }}
      />

      {destination && (
        <>
          {distance}
          {warmth}
        </>
      )}
    </>
  );
};

export default geolocated({
  watchPosition: true,
  positionOptions: {
    enableHighAccuracy: false,
  },
})(ThermApp);
