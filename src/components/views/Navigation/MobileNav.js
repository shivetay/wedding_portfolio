import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                className={link.className}>
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

MobileNav.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default MobileNav;
