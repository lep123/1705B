import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 介绍一下 constructor
class Clock extends React.Component {
  // 默认最后一个是 event
  setName = () => {
    console.log(this.setAge)
  }

  setAge () {

  }

  // 每次组件更新时 render 都会被调用
  render () {
    return (
      // 需要在 construtor 里绑定 如果不绑定 输出this 错误
      // <div onClick={this.setName.bind(this)}>
      //   33333
      // </div>
      // <div onClick={() => this.setName()}>
      //   33333
      // </div>
      <div onClick={this.setName}>
        33333
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

// 每个组件的state都是独立的
// ReactDOM.render(
//   <>
//     <Clock />
//     <Clock />
//     <Clock />
//   </>,
//   document.getElementById('root')
// )
