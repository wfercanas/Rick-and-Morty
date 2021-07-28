import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { Character } from '../Character/Character';
import './Characters.css';

const Characters = ({ characters, handleClick }) => {
  const [darkmode] = useContext(ThemeContext);

  return (
    <>
      <h2 className={darkmode ? 'Title dark' : 'Title'}>List of characters</h2>
      <section className={darkmode ? 'Characters dark' : 'Characters'}>
        {characters.map((character) => {
          return <Character character={character} handleClick={handleClick} />;
        })}
      </section>
    </>
  );
};

export { Characters };
