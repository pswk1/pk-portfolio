import React from 'react';
import { func, string } from 'prop-types';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <button lightTheme={isLight} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Mode' : '🌞 Mode'}
    </button>
  );
};

Toggle.protoTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
