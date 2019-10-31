import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 建议从组件自身的角度命名 props 而不是依赖于调用组件的上下文命名
function Avatar (props) {
  // props 是只读的不允许修改
  props.user = 'A1'
  return <h1>{props.user}</h1>
}

ReactDOM.render(
  <Avatar user={{name: 'xsa'}} />,
  document.getElementById('root')
)
