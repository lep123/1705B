import React, { Component } from 'react'
import F2 from './F2'
export default class F1 extends Component {
    
    
        
    
        
  render() {
    
    return (
          <li>
            <span>{this.props.name.name}</span>
            <F2 name={this.props.name.price}/>
          </li>
          
    )
  }
}
