import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import './index.css'

const G1 = () => <h1>组件一</h1>
const G2 = () => <h1>组件二</h1>
const G3 = () => <h1>组件三</h1>

export default function Router () {
  return (
    <BrowserRouter>
      <Route exact path="/" component={G1} />
      <Route path="/g2" component={G2} />
      <Route path="/g3" component={G3} />
    </BrowserRouter>
  )

}

