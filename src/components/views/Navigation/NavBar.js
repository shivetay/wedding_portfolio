import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
};

export default NavBar;
