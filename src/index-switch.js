import React from 'react'
import ReactDOM from 'react-dom'
import qs from 'qs'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

function G1 (props) {
  const { location } = props
  const params = qs.parse( location.search, { ignoreQueryPrefix: true } )
  return <h1>组件一</h1>
}

function G2 (props) {
  return <h1>组件二</h1>
}

function Router () {
  return (
    <BrowserRouter>
      <p><Link to="/g1?name=1">G1</Link></p>
      <p><Link to="/g2">G2</Link></p>

      <Switch>
        <Route exact path="/g1" component={G1} />
        <Route path="/g2" component={G2} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)