import React from 'react'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

const G1 = props => {
  console.log(props)
  return <h1>组件一</h1>
}
const G2 = props => {
  console.log(props)
  console.log(useParams())
  return <h1>组件二</h1>
}
const G3 = props => {
  console.log(props)
  console.log(useParams())
  return <h1>组件三</h1>
}

export default function Router () {
  return (
    <BrowserRouter>
      <Link to={{pathname: '/g2'}}>g2</Link>
      <Link to={{pathname: '/g2/13'}}>g3</Link>
      <Link to={{pathname: '/'}}>g1</Link>
      <Switch>
        <Route exact path="/" component={G1} />
        <Route path="/g2" component={G2} />
        <Route path="/g2/:id" component={G3} />
      </Switch>
    </BrowserRouter>
  )
}
