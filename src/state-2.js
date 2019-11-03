import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Person extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '小白',
    }
  }

  componentDidMount () {
    this.setState({
      name: '小花',
    })

    // 监听 state 方式一
    // this.setState((state, props) => {
    //   console.log(state)
    // })

    // this.setState({
    //   name: '小花',
    // }, () => {
    //   console.log(this.state.name)
    // })
  }

  render () {
    return <h1>{this.state.name}</h1>
  }
}

ReactDOM.render(
  <Person />,
  document.getElementById('root')
)
