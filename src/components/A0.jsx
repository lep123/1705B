import React from 'react'
import { withRouter, BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 1,
    }
  }

  componentWillMount () {
    console.log(222222);
  }

  render () {
    return <div>测试</div>
  }
}
