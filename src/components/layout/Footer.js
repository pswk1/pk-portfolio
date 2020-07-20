import React from 'react';

const setYear = () => {
  let currentYear = new Date().getFullYear();
  return currentYear;
};

const Footer = () => {
  return (
    <footer>
      <div className='contact-icons'>
        <a
          href='https://github.com/pswk1'
          target='_blank'
          rel='noopener noreferrer'
          alt='github'
        >
          <i style={{ color: 'white' }} className='fa fa-github-square' />
        </a>{' '}
        <a
          href='https://www.linkedin.com/in/peterswkang/'
          target='_blank'
          rel='noopener noreferrer'
          alt='linkedin'
        >
          <i style={{ color: 'white' }} className='fa fa-linkedin-square' />
        </a>{' '}
      </div>
      <p>
        © Peter Kang | <span id='year'>{setYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
