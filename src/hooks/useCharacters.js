import { useState, useEffect } from 'react';

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => {
        throw new Error(`Couldn't get the data:${error}`);
      });
  }, [url]);
  return characters;
};

export { useCharacters };
