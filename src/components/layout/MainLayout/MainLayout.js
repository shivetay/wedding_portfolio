import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
