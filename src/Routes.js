import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Merch from './Merch';
import Build from './Build';
import RandomTaco from './RandomTaco';

const Routes = () => (
    <div className="routes-container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/merchandise' component={Merch} />
        <Route path='/buildTaco' component={Build} /> 
        <Route path='/randomtaco' component={RandomTaco} />
      </Switch>
    </div>
)

export default Routes;