import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const [componentMounted, setComponentMounted] = useState(false);

  // Sets state and passes theme to the localStorage
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);

      // if there is no theme in localStorage, set theme as dark
    } else {
      setMode('dark');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
