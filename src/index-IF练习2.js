import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const list = ['小白', '小花', '小蓝']

class Element extends Component {
  render () {
    return (
      <div>
        {
          this.props.list.length > 0 && 
            this.props.list.map((name, key) => <p key={key}>{name}</p>)
        }

        {
          this.props.list > 0 ? 
            <h1>{this.props.list.length}</h1> :
            <p>0</p>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Element list={list} />,
  document.getElementById('root')
)