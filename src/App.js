import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import About from './components/views/About/About';
import Contact from './components/views/Contact/Contact';
import Home from './components/views/Home/Home';
import Offer from './components/views/Offer/Offer';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/offer' component={Offer} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
