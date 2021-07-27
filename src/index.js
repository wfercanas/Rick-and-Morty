import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './Context/ThemeContext';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
