import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Survey from './pages/Survey';
import NotMatch from './pages/NotMatch';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/' exact component={Welcome} />
        <Route path ='/survey' exact component={Survey} />
        <Route component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default App;
