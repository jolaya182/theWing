/* *
  title: App.js 

  date: 10/3/2019

  author:  javier olaya

  description: this component handles the basic routing for the webpage
         
 */
import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import {  MineSweep,home2, whoops404 } from '../pages';
import pages from '../css/index.scss'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={MineSweep} />
      <Route path='/home' exact component={home2} />
      
      <Route component={whoops404} />
    </Switch>
  </Router>);

export default App;