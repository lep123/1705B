import React, { Component } from 'react'

export default class Tike extends Component {
  
  btn = () => {
    this.props.fn("小明")
    console.log(this.props)
  }
  render() {
    return (
      <div onClick={() => this.btn()}>
        {this.props.name}
      </div>
    )
  }
    // constructor(porps){
    //     super(porps)
    //     this.state=({
    //         time:new Date(),
    //     })
    // }
    // componentDidMount(){
    //     setInterval(() => {
    //         this.tick()
    //     }, 500);
    // }
    // tick () {
    //     this.setState({
    //         time:new Date()
    //     })
    // }
    // componentDidMount() {
    //     console.log('componentDidMount','00000000000000000')
    // }
    // componentWillReceiveProps () {
    //     console.log('componentWillReceiveProps ','---------+++++++++')
    // }
  
}
