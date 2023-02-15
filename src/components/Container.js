import { useTheme } from "../context/ThemeContext";
import Cities from "./Cities";
import Weather from "./Weather";
function Container() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <hr />
      <Cities />
      <hr />
      <Weather />
      <hr />
    </div>
  );
}

export default Container;
