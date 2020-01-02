import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// https://juejin.im/entry/59522bdb6fb9a06b9a516113
// 介绍一下 constructor
class Clock extends React.Component {
  constructor (props) {
    // 把props传递到父类中 必须写
    super(props)
    // setInterval ID
    // 只有不参与数据流的字段才可以这么定义
    this.timerID = '' 

    // state 更新后会重新触发 render
    // state 是组件私有的 外面访问不到
    // 不能直接修改 state
    // state 赋值要放在构造函数中
    this.state = {
      date: new Date()
    }
  }

  // 组件被挂在后执行
  componentDidMount() {
    console.log('页面插入完成componentDidMount执行了')
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  // 每次组件更新时 render 都会被调用
  render () {
    console.log('我是render 我执行了')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <>
    <Clock />
    <Clock />
    <Clock />
  </>,
  document.getElementById('root')
)
