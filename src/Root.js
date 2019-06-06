import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/home/Home'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
)

export default Root
