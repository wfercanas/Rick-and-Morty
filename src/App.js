import React from 'react';
import { ErrorHandling } from './components/ErrorHandling/ErrorHandling';

import Header from './components/Header/Header';
import { CharactersContainer } from './containers/CharactersContainer/CharactersContainer';

function App() {
  return (
    <div className="App">
      <ErrorHandling>
        <Header />
        <CharactersContainer />
      </ErrorHandling>
    </div>
  );
}

export default App;
