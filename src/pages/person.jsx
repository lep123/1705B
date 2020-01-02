import React from 'react'

export default class Person extends React.Component {
  render () {
    console.log(this.props.children)
    
    return (
      <div>
        {
          this.props.children.map((v, key) => (
            <h1 key={key}>{v}</h1>
          ))
        }
      </div>
    )
  }
}
