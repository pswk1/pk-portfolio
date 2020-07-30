import React from 'react';
import { func, string } from 'prop-types';
import ToggleContainer from './Toggle.styled';

import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.protoTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
