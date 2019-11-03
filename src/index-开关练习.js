import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // 这种方式很傻
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  // handleClick = () => {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }))
  // }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)