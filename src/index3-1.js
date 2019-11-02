import React from 'react'
import ReactDOM from 'react-dom'

// react 必须有一个根节点
// const element = (
//   <p>小白</p>
//   <p>小花</p>
// )

// const element = (
//   <div>
//     {/* 这里写代码注释 */}
//     <p>小白</p>
//     <p>小花</p>
//   </div>
// )

// 数组必须有 key
const element = [
  <p key="0">小白</p>,
  <p key="1">小花</p>
]

ReactDOM.render(
  element,
  document.getElementById('root')
)

