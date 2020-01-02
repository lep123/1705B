import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// props 可以是任意值
function Button (props) {
  return <h1 onClick={props.onClick}>点我</h1>
}

class LoginControl extends React.Component {
  onClick = () => {
    console.log('我被点击了')
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick} />
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)