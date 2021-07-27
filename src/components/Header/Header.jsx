import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [darkmode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div className={darkmode ? 'Header dark' : 'Header light'}>
      <h1>Rick and Morty API</h1>
      <button
        type="button"
        onClick={handleClick}
        className={darkmode ? 'Button dark' : 'Button light'}
      >
        {darkmode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;
