import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Clock extends React.Component {
  constructor (props) {
    // 把props传递到父类中 必须写
    super(props)
    console.log(1)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
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

function tick () {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)