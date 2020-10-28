import React, { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { lightTheme } from '../../theme';
import PK_WD from '../../assets/imgs/PK_WD.png';
import PK_Light_WD from '../../assets/imgs/PK_Light_WD.png';
import Resume from '../../assets/resume/Peter_Kang_Resume.pdf'

const Home = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Fragment>
      <div className='center-logo'>
        <Link to='/about'>
          {themeContext === lightTheme ? (
            <img src={PK_Light_WD} alt='big logo' className='big-logo' />
          ) : (
            <img src={PK_WD} alt='big logo' className='big-logo' />
          )}
        </Link>

        <a
          className='btn-narrow my-top-1'
          href={Resume}
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
