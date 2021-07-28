import React, { useState, useEffect, useReducer } from 'react';

import { FavoriteCharacters } from '../../components/FavoriteCharacters/FavoriteCharacters';
import { Characters } from '../../components/Characters/Characters';

const initialState = {
  favoriteCharacters: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      if (
        !state.favoriteCharacters.some(
          (favorite) => favorite.id === action.payload.id
        )
      ) {
        return {
          ...state,
          favoriteCharacters: [...state.favoriteCharacters, action.payload],
        };
      }
      return state;
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
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
    if (
      !state.favoriteCharacters.some(
        (favorite) => favorite.id === favoriteCharacter.id
      )
    ) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: favoriteCharacter });
    } else {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: favoriteCharacter });
    }
  };

  return (
    <>
      <FavoriteCharacters favorites={state.favoriteCharacters} />
      <Characters characters={characters} handleClick={handleClick} />
    </>
  );
};

export { CharactersContainer };
