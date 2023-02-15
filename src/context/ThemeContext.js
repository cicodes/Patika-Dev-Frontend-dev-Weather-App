import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider> //Children O Component'in içindeki bütün component'leri bunun içine yerleştirmesini sağlar
  );
};

const useTheme = () => useContext(ThemeContext); //Custom hook direk bununla istediğimiz yerde kullanabiliriz

export { useTheme, ThemeProvider };
