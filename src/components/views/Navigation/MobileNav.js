import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MobileNav({ navLinks }) {
  return (
    <nav className='Navigation__Mobile'>
      {navLinks.map((link) => {
        return (
          <NavLink key={link.id} to={link.to} className={link.className}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

MobileNav.propTypes = {
  navLinks: PropTypes.object.isRequired,
};

export default MobileNav;
