import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light'); // Modo por defecto

  useEffect(() => {
    document.body.setAttribute('data-theme', theme); // 👈 Esto aplica el tema al body
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
