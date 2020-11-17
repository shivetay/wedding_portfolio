import React, { Component, Fragment } from 'react';

import './Navigation.scss';

import NavBar from './NavBar';
import SideDrawer from './SideDrawer';
import MobileNav from './MobileNav';
import BackDrop from '../../common/BackDrop/BackDrop';

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
    isOpen: false,
  };
  openDrawer = () => {
    this.setState({ isOpen: true });
  };
  closeDrawer = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { navItems, isOpen } = this.state;
    return (
      <Fragment>
        <NavBar navLinks={navItems} />
        <button onClick={this.openDrawer} className='Navigation-btn'>
          <span />
          <span />
          <span />
        </button>
        {isOpen && <BackDrop onClick={this.closeDrawer} />}
        <SideDrawer onClick={this.closeDrawer} show={isOpen}>
          <MobileNav navLinks={navItems} />
        </SideDrawer>
      </Fragment>
    );
  }
}

export default Navigation;
