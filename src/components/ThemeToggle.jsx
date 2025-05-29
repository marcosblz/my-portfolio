import "@theme-toggles/react/css/Classic.css";
import './ThemeToggle.css';    // ← aquí
import { Classic } from "@theme-toggles/react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Classic
      duration={750}
      toggled={theme === 'dark'}
      onToggle={toggleTheme}
      style={{
        background: 'transparent',
        border: 'none',
        outline: 'none',
        fontSize: '80px',
        color: theme === 'dark' ? '#fff' : '#000',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    />
  );
};

export default ThemeToggle;
