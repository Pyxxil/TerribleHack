import React, { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MAPQUEST_API_KEY;

interface SearchProps {
  setDestination: (destination: any) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    fetch(
      `https://open.mapquestapi.com/nominatim/v1/search.php?key=${API_KEY}&format=json&q=${search}`
    ).then((resp) => {
      resp.json().then((json) => setFound(json));
    });
  }, [search]);

  useEffect(() => {
    if (found.length === 1) props.setDestination(found[0]);
  }, [found]);

  return (
    <>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />

      <div>
        <label htmlFor="destination">Destination</label>
        <select
          name="Destination"
          id="destination"
          onChange={(e) => {
            props.setDestination(JSON.parse(e.target.value));
            setSelected(e.target.value);
          }}
          value={(selected as any).place_id}
        >
          {found.map((thing) => {
            return (
              <option
                key={(thing as any).place_id}
                value={JSON.stringify(thing)}
              >
                {(thing as any).display_name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Search;
