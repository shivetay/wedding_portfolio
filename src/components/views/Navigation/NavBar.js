import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import active from '../../../Images/ciapka1.png';

function NavBar({ navLinks }) {
  return (
    <nav className='Navigation'>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                exact
                key={link.id}
                to={link.to}
                className={link.className}>
                {link.name}
              </NavLink>
              <img src={active} />
            </li>
          );
        })}
      </ul>
      <div className='Navigation__Icons'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.facebook.com/bohho.sluby.imprezy'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/bohho_sluby_imprezy/'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
};

export default NavBar;
