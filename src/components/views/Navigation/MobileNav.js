import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function MobileNav({ navLinks }) {
  return (
    <nav className='Navigation__Mobile'>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                exact
                key={link.id}
                to={link.to}
                className='Navigation__Mobile-link'>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className='Navigation__Mobile-icons'>
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

MobileNav.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default MobileNav;
