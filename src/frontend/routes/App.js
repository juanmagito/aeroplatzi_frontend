import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchFly from '../containers/SearchFly';
import NotFound from '../containers/NotFound';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchFly} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
