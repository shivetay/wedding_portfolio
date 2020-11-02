import React, { Component, Fragment } from 'react';

import NavBar from './NavBar';
import Logo from '../../common/Logo/Logo';

class Navigation extends Component {
  state = {
    navItems: [
      { id: 1, name: 'Główna', to: '/', clasName: 'Header__Nav-link' },
      { id: 2, name: 'O Mnie', to: '/about', clasName: 'Header__Nav-link' },
      {
        id: 3,
        name: 'Inspiracje',
        to: '/inpiration',
        clasName: 'Header__Nav-link',
      },
      { id: 4, name: 'Kontakt', to: '/contact', clasName: 'Header__Nav-link' },
    ],
  };
  render() {
    const { navItems } = this.state;
    return (
      <Fragment>
        <Logo />
        <NavBar navLinks={navItems} />
      </Fragment>
    );
  }
}

export default Navigation;
