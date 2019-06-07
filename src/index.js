import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import store from '../src/store/store'

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
