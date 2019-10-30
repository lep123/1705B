import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const name = '1705B'
const element = <h1>{name + ' 班级'}</h1>

ReactDOM.render(
  element,
  document.getElementById('root')
)
