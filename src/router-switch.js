import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom"

const G1 = props => {
  console.log(props)
  return <h1>组件一</h1>
}
const G2 = props => {
  console.log(useParams())
  return <h1>组件二</h1>
}

export default function Router () {
  return (
    <BrowserRouter>
      <Link to={{pathname: '/g2'}}>g2</Link>

      <Switch>
        <Route path="/g2" component={G1} />
        <Route path="/:id" component={G2} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)