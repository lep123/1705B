import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

const Login = props => {
  return <h1>登录</h1>
}
const Home = props => {
  return <DetailHome />
}
const DetailHome = props => {
  return (
    <div>
      <h1><Link to="/home/detail1">detail-1</Link></h1>
      <h1><Link to="/home/detail2">detail-2</Link></h1>
      <Switch>
        <Route exact path="/home/detail1">
          <h3>详情1</h3>
        </Route>
        <Route path="/home/detail2">
          <h3>详情2</h3>
        </Route>
      </Switch>
    </div>
  )
}
const Detail = props => {
  return <h1>详情</h1>
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