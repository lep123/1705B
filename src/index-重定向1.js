import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Switch, Route, Link, useParams } from "react-router-dom"

let token = true

const Login = props => {
  return <h1>组件一</h1>
}
const Home = props => {
  return <h1>组件二</h1>
}

function Router () {
  return (
    <BrowserRouter>
      <h1><Link to="/login">login</Link></h1>
      <h1><Link to="/home">home</Link></h1>

      <Switch>
        <Route path="/home" render={routeProps => {
          if (token) {
            token = !token
            return <Redirect to="/login" />
          }
          return <Home />
        }} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)