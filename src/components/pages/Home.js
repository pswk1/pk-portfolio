import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PK_WD from '../../assets/imgs/PK_WD.png';
import PK_Light_WD from '../../assets/imgs/PK_Light_WD.png';

const Home = () => {
  return (
    <Fragment>
      <div className='center-logo'>
        <Link to='/about'>
          <img src={PK_Light_WD} alt='big logo' className='big-logo' />
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
