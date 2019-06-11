import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Trivia from './pages/Trivia';
import NotMatch from './pages/NotMatch';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/' exact component={Welcome} />
        <Route path ='/trivia' exact component={Trivia} />
        <Route component={NotMatch} />
      </Switch>
    </Router>
  );
}

export default App;
