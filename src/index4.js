import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const html = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello world',
)

ReactDOM.render(
  html,
  document.getElementById('root')
)
