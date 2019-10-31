import './App.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './components/Index'
import Detail from './components/Detail'
import Images from './components/Image'

export default function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Index} />
        <Route path="/images" component={Images} />
        <Route path="/detail" component={Detail} />
      </BrowserRouter>
    </div>
  )
}

