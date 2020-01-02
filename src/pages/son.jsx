import React, { Component } from 'react'

export default class Son extends Component {
    btn = () => {
        this.props.fn("小刚")
    }
  render() {
    return (
      <div onClick={() => {this.btn()}}>
        {this.props.name}
      </div>
    )
  }
}
