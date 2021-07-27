import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

import './Header.css';

const Header = () => {
  const [darkmode, setDarkMode] = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={darkmode ? 'Header dark' : 'Header light'}>
      <h1>The Rick and Morty API</h1>
      <button
        type="button"
        onClick={handleClick}
        className={darkmode ? 'Button dark' : 'Button light'}
      >
        {darkmode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default Header;
