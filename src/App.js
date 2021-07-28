import React from 'react';

import Header from './components/Header/Header';
import { CharactersContainer } from './containers/CharactersContainer/CharactersContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <CharactersContainer />
    </div>
  );
}

export default App;
