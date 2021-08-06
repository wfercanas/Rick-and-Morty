const favoritesReducer = (state, action) => {
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

export { favoritesReducer };
