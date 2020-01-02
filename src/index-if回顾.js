import React from 'react'
import ReactDOM from 'react-dom'
// import Router from './router'
import './index.css'

/**
 * if else
 * 三目运算符 boolea ？表达式1 : 表达式2
 * &&
 */

const num = 1
// const name = '小白'
// const element = (
//   <h1 className="set-name">
//     {num > 1 ? '小白' : '小花'}
//   </h1>
// )

const element = (
  <h1 className="set-name">
    {num > 0 && '小花'}
  </h1>
)


ReactDOM.render(
  element,
  document.getElementById('root')
)