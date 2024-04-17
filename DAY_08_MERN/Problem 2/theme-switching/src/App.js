
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import UserForm from './UserForm';
import ThemeSwitcher from './ThemeSwitcher';
import Header from './Header';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <h2>Controlled vs. Uncontrolled Components</h2>
        <UserForm />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
