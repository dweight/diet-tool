import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import App from './components/App';
import Editor from './components/Editor';
import List from './components/List';
import Stats from './components/Stats';
import Home from './components/Home';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/editor" component={Editor}/>
      <Route path="/list" component={List}/>
      <Route path="/stats" component={Stats}/>
    </Route>
  </Router>
), document.getElementById('app'))
