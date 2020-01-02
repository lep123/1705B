import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function G1 (props) {
  return <h1>组件一</h1>
}

function G2 (props) {
  return (
    <div>
      <Route path="/g2">
        33333333
      </Route>
      <Route path="/g2/g22">
        <G22 />
      </Route>
    </div>
  )
}

function G22 () {
  return <h1>组件22</h1>
}

function G3 (props) {
  return <h1>组件三</h1>
}

function Router () {
  return (
    <BrowserRouter>
      <p><Link to={{pathname: '/g2'}}>g2</Link></p>
      <p><Link to={{pathname: '/g2/g22'}}>g22</Link></p>
      <p><Link to={{pathname: '/g2/13'}}>g3</Link></p>
      <p><Link to={{pathname: '/'}}>g1</Link></p>

      <Switch>
        <Route exact path="/" component={G1} />
        <Route path="/g2" component={G2} />
        <Route path="/g2/:id" component={G3} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)