import "@theme-toggles/react/css/Classic.css";
import './ThemeToggle.css';
import { Classic } from "@theme-toggles/react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle-container">
      <Classic
        className="theme-toggle-button"
        duration={750}
        toggled={theme === 'dark'}
        onToggle={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;
