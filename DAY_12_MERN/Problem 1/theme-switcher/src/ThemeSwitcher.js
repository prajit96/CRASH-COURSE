import React, { useContext } from 'react';
import { ThemeContext, themes } from './themes';


function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === themes.light ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemeSwitcher;
