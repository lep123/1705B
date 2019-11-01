import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// const html = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello world',
// )

const num = 5
let element = ''

if(num > 1) {
  element = <h1>1705B</h1>
} else {
  element = <h1>1706B</h1>
}

element = <div>{element}</div>

ReactDOM.render(
  element,
  document.getElementById('root')
)
