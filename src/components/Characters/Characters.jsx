import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { Character } from '../Character/Character';
import { Search } from '../Search/Search';
import './Characters.css';

const Characters = ({ characters, handleClick, handleSearch, search }) => {
  const [darkmode] = useContext(ThemeContext);

  return (
    <>
      <h2 className={darkmode ? 'Title dark' : 'Title'}>List of characters</h2>
      <Search handleSearch={handleSearch} search={search} />
      <section className={darkmode ? 'Characters dark' : 'Characters'}>
        {characters.map((character) => {
          return (
            <Character
              key={character.id}
              character={character}
              handleClick={handleClick}
            />
          );
        })}
      </section>
    </>
  );
};

export { Characters };
