import React from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

export const ThemeContext = React.createContext(themes.light);
