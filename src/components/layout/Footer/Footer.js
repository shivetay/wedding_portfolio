import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='Footer'>
      <p>
        &copy;{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://ldawidowicz.pl'>
          Łukasz Dawidwoicz
        </a>{' '}
        2020
      </p>
    </footer>
  );
};

export default Footer;
