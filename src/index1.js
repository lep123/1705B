import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const name = '1705B'
const element = <h1>{name + ' 班级'}</h1>

// 重新定义一个新对象
// Immutable
ReactDOM.render(
  element,
  document.getElementById('root')
)
