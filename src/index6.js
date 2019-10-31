import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 函数组件
// function Welcome (props) {
//   return <h1>{props.name}</h1>
// }

// class 组件
// Component 可以提取到上面写
class Welcome extends React.Component {
  render () {
    return <h1>{this.props.name}</h1>
  }
}

ReactDOM.render(
  <Welcome name="1705B" />,
  document.getElementById('root')
)
