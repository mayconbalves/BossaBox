import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './containers/home/Home'
import { GlobalStyle } from './theme'

const Root = ({ store }) => (
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>
)

Root.prototypes = {
  store: PropTypes.object.isRequired
}

export default Root
