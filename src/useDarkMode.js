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
    window.matchMedia &&
    //  prefers-color-scheme is CSS media feature that checks if use OS has enabled a preferred light/dark theme
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    // if user OS has dark mode on their machine, and localTheme does not exist, set theme to dark.
    !localTheme
      ? setMode('dark')
      : // else if, localTheme exists, set it to the existing localTheme
      localTheme
      ? setTheme(localTheme)
      : // else set theme to light mode
        setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
