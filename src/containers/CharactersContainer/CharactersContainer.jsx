import React, { useState, useReducer, useMemo } from 'react';
import { initialCharacters } from '../../utils/initialCharacters';
import { favoritesReducer } from '../../utils/favoritesReducer';
import { FavoriteCharacters } from '../../components/FavoriteCharacters/FavoriteCharacters';
import { Characters } from '../../components/Characters/Characters';
import { useCharacters } from '../../hooks/useCharacters';

const CharactersContainer = () => {
  const API = 'https://rickandmortyapi.com/api/character';
  const characters = useCharacters(API);

  const [state, dispatch] = useReducer(favoritesReducer, initialCharacters);
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

  const [search, setSearch] = useState('');
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const filteredCharacters = useMemo(() => {
    if (search) {
      return characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return characters;
    }
  }, [characters, search]);

  return (
    <>
      <FavoriteCharacters favorites={state.favoriteCharacters} />
      <Characters
        characters={filteredCharacters}
        handleClick={handleClick}
        handleSearch={handleSearch}
        search={search}
      />
    </>
  );
};

export { CharactersContainer };
