import React, { useState, useEffect } from 'react';
import './Characters.css';

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
        return (
          <div className="Character" key={character.id}>
            <div
              className="Character__image"
              style={{ backgroundImage: `url(${character.image})` }}
              alt="character avatar"
            />
            <div className="Character__data">
              <h2 className="Character__data--name">{character.name}</h2>
              <p className="Character__data--meta">
                {character.status} - {character.species}
              </p>
              <p className="Character__data--subtitle">Last known location:</p>
              <p className="Character__data--value">
                {character.location.name}
              </p>
              <p className="Character__data--subtitle">Origin:</p>
              <p className="Character__data--value">{character.origin.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
