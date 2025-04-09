import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light'); // por defecto: modo claro

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
