import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <h1>app.js</h1>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
