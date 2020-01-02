import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// 介绍一下 constructor
class Clock extends React.Component {
  constructor (props) {
    // 把props传递到父类中 必须写
    super(props)

    this.state = {
      name: '小白',
    }
  }

  // 默认最后一个是 event
  // setName (e, option, event) {
  //   console.log(e, option, event.target)
  // }

  setName = (e, option, event) => {
    console.log(e, option, event.target)
  }

  onClick = e => {
    e.preventDefault()
    console.log('阻止了a标签')
  }

  // 每次组件更新时 render 都会被调用
  render () {
    return (
      // 需要在 construtor 里绑定 如果不绑定 输出this 错误
      // <div onClick={this.setName.bind(this, '1', 2)}>
      //   {this.state.name}
      // </div>
      // 函数调用 有性能问题
      // <div onClick={e => this.setName(1, 2, e)}>
      //   {this.state.name}
      // </div>
      // 不传参数的时候写法简单
      // <div onClick={e => this.setName(1, 2, e)}>
      //   {this.state.name}
      // </div>

      <a href="http://www.baidu.com" onClick={this.onClick}>点我</a>
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
