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
      </div>
      <p>
        Peter Kang | Web Developer | <span id='year'>{setYear()}</span>
      </p>
      {/* <small>
        <b>Sun</b> icon made by{' '}
        <a href='https://www.flaticon.com/authors/smalllikeart'>smalllikeart</a>{' '}
        from <a href='https://www.flaticon.com'>www.flaticon.com</a>
      </small>{' '}
      &nbsp;
      <small>
        <b>Moon</b> icon made by{' '}
        <a href='https://www.freepik.com/home'>Freepik</a> from{' '}
        <a href='https://www.flaticon.com'>www.flaticon.com</a>
      </small> */}
    </footer>
  );
};

export default Footer;
