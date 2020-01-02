import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Index = () => <h1>首页</h1>
const Reg = () => <h1>注册</h1>
const Element = () => {
  if (localStorage.getItem('token')) {
    return <Index />

  } else {
    return <Reg />
  }
}

ReactDOM.render(
  <Element />,
  document.getElementById('root')
)