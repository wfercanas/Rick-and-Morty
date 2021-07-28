import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const Character = ({ character, handleClick }) => {
  const [darkmode] = useContext(ThemeContext);
  const [heart, setHeart] = useState(false);

  return (
    <article
      className={darkmode ? 'Character dark' : 'Character'}
      key={character.id}
    >
      <div
        className="Character__image"
        style={{ backgroundImage: `url(${character.image})` }}
      />
      <div className="Character__data">
        <h3 className="Character__data--name">{character.name}</h3>
        <p className="Character__data--meta">
          {character.status} - {character.species}
        </p>
        <p className="Character__data--subtitle">Last known location:</p>
        <p className="Character__data--value">{character.location.name}</p>
        <p className="Character__data--subtitle">Origin:</p>
        <p className="Character__data--value">{character.origin.name}</p>
        <button
          className="Character__favButton"
          onClick={() => {
            handleClick(character);
            setHeart(!heart);
          }}
        >
          {!heart ? '🤍' : '🧡'}
        </button>
      </div>
    </article>
  );
};

export { Character };
