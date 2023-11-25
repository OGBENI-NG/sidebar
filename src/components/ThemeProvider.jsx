import React, { createContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState("light");

  // Function to toggle between dark and light themes
  const toggleOpen = () => {
    setToggle((prevMode) => !prevMode);
  };

  const toggleTheme = () => {
      setTheme(prevMode => prevMode === "light" ? "dark" : "light");

  }

  function lightMode() {
      setTheme("light");
  }

  function darkMode() {
      setTheme("dark");
  }

  return (
    <ThemeContext.Provider value={{toggle, toggleTheme, theme, toggleOpen, lightMode, darkMode}}>
      <div>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export {ThemeContext}
