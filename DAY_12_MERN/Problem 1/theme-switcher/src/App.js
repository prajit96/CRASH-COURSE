// App.js

import React, { useState } from 'react';
import { ThemeContext, themes } from './themes';
import ThemeSwitcher from './ThemeSwitcher'; // Import ThemeSwitcher component

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <div style={{ background: currentTheme.background, color: currentTheme.text }}>
        {/* Your app content goes here */}
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
