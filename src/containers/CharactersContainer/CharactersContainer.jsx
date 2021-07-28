import React, { useState, useEffect, useReducer } from 'react';

import { FavoriteCharacters } from '../../components/FavoriteCharacters/FavoriteCharacters';
import { Characters } from '../../components/Characters/Characters';

const initialState = {
  favoriteCharacters: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    default:
      return state;
  }
};

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character', { crossDomain: true })
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favoriteCharacter) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favoriteCharacter });
  };

  return (
    <>
      <FavoriteCharacters favorites={state.favoriteCharacters} />
      <Characters characters={characters} handleClick={handleClick} />
    </>
  );
};

export { CharactersContainer };
