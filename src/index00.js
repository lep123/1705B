import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
