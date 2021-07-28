import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './FavoriteCharacters.css';

const FavoriteCharacters = ({ favorites }) => {
  const [darkmode] = useContext(ThemeContext);
  return (
    <>
      <h2 className={darkmode ? 'Title dark' : 'Title'}>Favorites</h2>
      <ul className={darkmode ? 'Favorites dark' : 'Favorites'}>
        {favorites.map((favorite) => (
          <li key={favorite.id} className="Favorites__avatar">
            <img
              src={favorite.image}
              className="Favorites__avatar--image"
              alt="Avatar of character"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export { FavoriteCharacters };
