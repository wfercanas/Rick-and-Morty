import React, { useState, useEffect } from 'react';

const Characters = () => {
  const [characters, setCharecters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharecters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => {
        return <h2>{character.name}</h2>;
      })}
    </div>
  );
};

export default Characters;
