
import React from 'react'

export default class A0 extends React.Component {
  render () {
    console.log(this.props.children)
    
    return (
      <div className="a0">
        A0
      </div>
    )
  }
}