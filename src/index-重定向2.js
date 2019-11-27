import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

let token = false

const Login = props => {
  return <h1>登录</h1>
}
const Home = props => {
  if (!token) {
    props.history.push('login')
  }
  return <h1>首页</h1>
}

function Router () {
  return (
    <BrowserRouter>
      <h1><Link to="/login">login</Link></h1>
      <h1><Link to="/home">home</Link></h1>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)