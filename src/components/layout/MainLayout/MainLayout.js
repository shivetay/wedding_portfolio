import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
// import Home from '../../views/Home/Home';
// import About from '../../views/About/About';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
