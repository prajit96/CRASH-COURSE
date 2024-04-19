// Header.js

import React, { useContext } from 'react';
import { ThemeContext } from './themes';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme.background, color: theme.text }}>
      {/* Header content */}
    </header>
  );
}

export default Header;
