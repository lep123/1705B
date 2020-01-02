import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

const G1 = props => {
  console.log(props)
  return <h1>组件一</h1>
}
const G2 = () => <h1>组件二</h1>
const G3 = () => <h1>组件三</h1>

export default function Router () {
  return (
    <BrowserRouter>
      <Link to={{pathname: '/g2'}}>g2</Link>
      <Link to={{pathname: '/g3'}}>g3</Link>
      <Link to={{pathname: '/'}}>g1</Link>

      <Route exact path="/" component={G1} />
      <Route path="/g2" component={G2} />
      <Route path="/g3" component={G3} />
    </BrowserRouter>
  )
}

