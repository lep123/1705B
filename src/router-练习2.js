import React from 'react'
import { BrowserRouter, Route, Link, useParams } from "react-router-dom"

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
      <Link to={{pathname: '/id/1'}}>g2</Link>
      <Link to={{pathname: '/name/xsa'}}>g3</Link>
      <Link to={{pathname: '/'}}>g1</Link>

      <Route exact path="/" component={G1} />
      <Route path="/id/:id" component={G2} />
      <Route path="/name/:name" component={G3} />
    </BrowserRouter>
  )
}

