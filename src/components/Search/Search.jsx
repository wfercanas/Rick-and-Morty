import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './Search.css';

const Search = ({ handleSearch, search }) => {
  const [darkmode] = useContext(ThemeContext);
  return (
    <div className={darkmode ? 'Search dark' : 'Search light'}>
      <input
        className={darkmode ? 'SearchInput dark' : 'SearchInput light'}
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder="Search a character"
      />
    </div>
  );
};

export { Search };
