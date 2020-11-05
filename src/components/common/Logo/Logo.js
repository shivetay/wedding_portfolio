import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import logo from '../../../Images/karmelove_logo.png';

const Logo = () => {
  return (
    <div className='Logo'>
      <Link to='/'>
        <img className='Logo__Img' src={logo} alt='karmelove_logo' />
      </Link>
    </div>
  );
};

export default Logo;
