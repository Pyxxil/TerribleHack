import React, { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "http://open.mapquestapi.com/nominatim/v1/search.php?key=FMSBjGjYYvz8Ay6zPyKakVvWtVlkKUz9&format=json"
    );
  }, []);

  return (
    <div>
      <input onChange={() => {
          
      }}>{search}</input>
    </div>
  );
};

export default Search;
