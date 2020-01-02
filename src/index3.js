import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//111

const attr = {
  name: 1,
  age: 2,
}

const html = (
  <div>
    <span dataType="a0"></span>
    <span data={attr.name}></span>
    <span className="cls"></span>
    <span className={attr.name}></span>
  </div>
)

ReactDOM.render(
  html,
  document.getElementById('root')
)
