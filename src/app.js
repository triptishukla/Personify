import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LoginPage from './components/auth/LoginPage';
import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    <Route path="/login" component={LoginPage}/>
      <IndexRoute component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/contact" component={ContactPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
