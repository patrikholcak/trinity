# will be automatically removed in production
require('./styles/main.css')

React = require 'react'
ReactDOM = require 'react-dom'
App = require './components/App'

ReactDOM.render(React.createElement(App), document.getElementById('app'))
