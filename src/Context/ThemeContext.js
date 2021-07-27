import React, { useState, createContext } from 'react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <ThemeContext.Provider value={[darkmode, setDarkmode]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
