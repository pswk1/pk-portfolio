import React from 'react';

const Contact = () => {
  return (
    <div className='container my-bot-3'>
      <h1 className='color-pastel all-center'>Contact</h1>
      <div className='all-center'>
        <p>
          I am available for full-time, part-time, or internship positions.
          Please do not hesitate to reach out to me to discuss how I may
          contribute to your engineering team!
        </p>

        <a
          className='btn my-top-1'
          href='mailto:peeterkang@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Email
        </a>

        <a
          className='btn my-top-1'
          href='https://github.com/pswk1'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>

        <a
          className='btn my-top-1 my-bot-1'
          href='https://www.linkedin.com/in/peterswkang/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
