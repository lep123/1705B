import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 要求 num > 1 展示 1705B
// num <= 1 展示 1706B
const num = 1
let element = ''

if (num > 1) {
  element = <h1>1705B</h1>

} else {
  element = <h1>1706B</h1>
}

element = <div>{element}</div>

ReactDOM.render(
  element,
  document.getElementById('root')
)
