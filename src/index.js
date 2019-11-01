import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const html = React.createElement(
  'h1',
  {className: 'A',value: 1},
  'end'
)

// ReactDOM.render 渲染
ReactDOM.render(
  html,
  document.getElementById('root')
)