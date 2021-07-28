import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './Characters.css';

const Characters = ({ characters, handleClick }) => {
  const [darkmode] = useContext(ThemeContext);

  return (
    <>
      <h2>List of characters</h2>
      <section className={darkmode ? 'Characters dark' : 'Characters'}>
        {characters.map((character) => {
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
                <h2 className="Character__data--name">{character.name}</h2>
                <p className="Character__data--meta">
                  {character.status} - {character.species}
                </p>
                <p className="Character__data--subtitle">
                  Last known location:
                </p>
                <p className="Character__data--value">
                  {character.location.name}
                </p>
                <p className="Character__data--subtitle">Origin:</p>
                <p className="Character__data--value">
                  {character.origin.name}
                </p>
                <i
                  className="Character__favButton"
                  onClick={() => handleClick(character)}
                >
                  🤍
                </i>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export { Characters };
