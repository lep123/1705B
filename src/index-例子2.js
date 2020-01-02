import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function G1 (props) {
  return <h1>组件一</h1>
}

function G2 (props) {
  return <h1>组件二</h1>
}

function G3 (props) {
  return <h1>组件三</h1>
}

function Router () {
  return (
    <BrowserRouter>
      <p><Link to="/">G1</Link></p>
      <p><Link to="/g2">G2</Link></p>
      <p><Link to="/g2/3">G3</Link></p>

      <Route exact path="/" component={G1} />
      <Route path="/g2" component={G2} />
      <Route path="/g2/:id" component={G3} />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)