import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import styles from './App.scss';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import About from './components/views/About/About';
import Contact from './components/views/Contact/Contact';
import Home from './components/views/Home/Home';
import Offer from './components/views/Offer/Offer';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/offer' component={Offer} />
          <Route exact path='/contact' component={Contact} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
