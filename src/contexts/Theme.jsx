import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const ThemeContext = React.createContext();

export const switchTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const toggleTheme = () => {
    setTheme(theme === "default" ? "dark" : "default");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
