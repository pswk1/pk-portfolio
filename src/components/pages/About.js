import React from 'react';

const About = () => {
  return (
    <div className='container my-bot-3'>
      <div className='grid-2'>
        <div>
          {/* <h1 className='color-pastel'>About Me</h1> */}
          <h1>About Me</h1>
          <p className='my-bot-1'>
            A son to Korean immigrants, I grew up an Angeleno before I graduated
            from the University of California, Santa Barbara. I had plans to
            attend physical therapy school before I stumbled upon my very first
            HTML tutorial in my free time. I was instantly hooked.
          </p>

          <p className='my-bot-1'>
            I've never felt more sure about pursuing a life of coding. In April
            2020, I earned a certificate in Full-Stack Web Development from
            UCLA.
          </p>

          <p>
            Outside of web development, I still like to geek out on biomechanics
            and bugging my friends, family, and peers about the long-term health
            benefits of strength training. Currently I'm working on putting
            together a garage gym!
          </p>
        </div>

        <div className='all-center profile-pic'></div>
      </div>

      <div className='all-center my-top-3 my-bot-2'>
        {/* <h2 className='color-pastel'>Tools and Tech</h2> */}
        <h2>Tools and Tech</h2>
        <p>
          Front End: HTML/CSS3, Javascript/jQuery, React.js, CSS Frameworks,
          Sass
        </p>
        <p>Back End: Node.js, Express, NoSQL, SQL, Git Version Control</p>
      </div>
    </div>
  );
};

export default About;
