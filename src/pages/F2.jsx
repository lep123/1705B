import React, { Component } from 'react'

export default class F2 extends Component {
    
    
        
    
        
  render() {
    console.log(this.props.name[0].name)
    return (
          <span>
            <span>${this.props.name[0].name}</span>
            {
                this.props.name[0].sex?
                <span>{this.props.name[0].sex}</span>:
                <span>中性人</span>
            }
          </span>
    )
  }
}