import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { lightTheme } from '../../theme';

const setYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <footer className>
      <div className='contact-icons'>
        <a
          href='https://github.com/pswk1'
          target='_blank'
          rel='noopener noreferrer'
          alt='github'
        >
          {themeContext === lightTheme ? (
            <i style={{ color: 'black' }} className='fa fa-github-square' />
          ) : (
            <i style={{ color: 'white' }} className='fa fa-github-square' />
          )}
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/peterswkang/'
          target='_blank'
          rel='noopener noreferrer'
          alt='linkedin'
        >
          {themeContext === lightTheme ? (
            <i style={{ color: 'black' }} className='fa fa-linkedin-square' />
          ) : (
            <i style={{ color: 'white' }} className='fa fa-linkedin-square' />
          )}
        </a>{' '}
        <a
          href='https://twitter.com/pswk11'
          target='_blank'
          rel='noopener noreferrer'
          alt='twitter'
        >
          {themeContext === lightTheme ? (
            <i style={{ color: 'black' }} className='fa fa-twitter' />
          ) : (
            <i style={{ color: 'white' }} className='fa fa-twitter' />
          )}
        </a>{' '}
        <a
          href='https://dev.to/pswk1'
          target='_blank'
          rel='noopener noreferrer'
          alt='devto'
        >
          {themeContext === lightTheme ? (
            <i style={{ color: 'black' }} className='fa fa-dev'></i>
          ) : (
            <i style={{ color: 'white' }} className='fa fa-dev'></i>
          )}
        </a>{' '}
      </div>
      <p>
        Peter Kang | <span id='year'>{setYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
