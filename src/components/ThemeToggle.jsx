import "@theme-toggles/react/css/Classic.css";
import './ThemeToggle.css';
import { Classic } from "@theme-toggles/react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Classic
      className="theme-toggle-button"
      toggled={theme === 'dark'}
      onToggle={toggleTheme}
      duration={750}
    />
  );
};

export default ThemeToggle;
