import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

<<<<<<< HEAD
function Clock(props) {
  return (
||||||| merged common ancestors
// const element = <h1>小花</h1>

function tick () {
  const element = (
=======
// const element = <h1>小花</h1>qqqq

function tick () {
  const element = (
>>>>>>> 69f4e3a8bc3250bc50be3f19066ae1f9e6dbcb79
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
