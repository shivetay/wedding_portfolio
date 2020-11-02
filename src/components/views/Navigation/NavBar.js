import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavBar({ navLinks }) {
  return (
    <nav>
      {navLinks.map((link) => {
        return (
          <NavLink key={link.id} to={link.to}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

NavBar.propTypes = {
  navLinks: PropTypes.array,
};

export default NavBar;
