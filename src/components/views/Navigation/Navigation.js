import React, { Component, Fragment } from 'react';

import './Navigation.scss';

import NavBar from './NavBar';
// import MobileNav from './MobileNav';

class Navigation extends Component {
  state = {
    navItems: [
      { id: 1, name: 'Główna', to: '/', className: 'Navigation__Nav-link' },
      {
        id: 2,
        name: 'O Mnie',
        to: '/about',
        className: 'Navigation__Nav-link',
      },
      {
        id: 3,
        name: 'Oferta',
        to: '/offer',
        className: 'Navigation__Nav-link',
      },

      {
        id: 4,
        name: 'Kontakt',
        to: '/contact',
        className: 'Navigation__Nav-link',
      },
    ],
  };
  render() {
    const { navItems } = this.state;
    return (
      <Fragment>
        <NavBar navLinks={navItems} />
        <button className='Navigation-btn'>
          <span />
          <span />
          <span />
        </button>
        {/* <MobileNav navLinks={navItems} /> */}
      </Fragment>
    );
  }
}

export default Navigation;
