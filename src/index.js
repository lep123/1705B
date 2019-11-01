import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// const element = <h1>小花</h1>

function tick () {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>{new Date().getTime()}</h2>
    </div>
  )

  ReactDOM.render(
    element,
    document.querySelector('#root')
  )
}

setInterval(tick, 2000)

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )
