
import React, { createContext, useState } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
