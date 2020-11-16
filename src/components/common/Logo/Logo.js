import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import logo from '../../../Images/logo2_bez_tla.png';

const Logo = () => {
  return (
    // <div className='Logo'>
    <Link className='Logo' to='/'>
      <img className='Logo__Img' src={logo} alt='bohho_logo' />
    </Link>
    // {/* </div> */}
  );
};

export default Logo;
