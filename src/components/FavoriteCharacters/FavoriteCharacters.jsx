import React from 'react';

const FavoriteCharacters = ({ favorites }) => {
  return (
    <>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li>{favorite.name}</li>
        ))}
      </ul>
    </>
  );
};

export { FavoriteCharacters };
