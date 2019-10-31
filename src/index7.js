import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 这里不允许是箭头函数
// const Welcome = () => <h1>{this.props.name}</h1>

const Welcome = function (props) {
  return <h1>{props.name}</h1> 
}

// 元素也可以是组件
const element = <Welcome name="1705B" />

/**

让我们来回顾一下这个例子中发生了什么：

我们调用 ReactDOM.render() 函数，并传入 <Welcome name="1705B" /> 作为参数。
React 调用 Welcome 组件，并将 {name: '1705B'} 作为 props 传入。
Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
React DOM 将 DOM 高效地更新为 <h1>Hello, Sara</h1>。
注意： 组件名称必须以大写字母开头。

React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

你可以在深入 JSX中了解更多关于此规范的原因。
 */

// 做一个联系 react 自带联系题

ReactDOM.render(
  element,
  document.getElementById('root')
)