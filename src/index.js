import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

const name = "1705B"
const element = <div>{name+'班'}</div>
const count = '20人'
const num = <div>{element}{count}</div>
ReactDOM.render(
  num,
  document.getElementById('root')
)
const from = {
  name:"小明",
  age:"20"
}
function dag(){
  return from.name + '' + from.age
}
const htmls = (
  <div className = {from.name}>
    {dag()}
  </div>
)
ReactDOM.render(
  htmls,
  document.getElementById('root1')
)

let countnum = false?'已售':'未受'
ReactDOM.render(
  <div>{countnum}</div>,
  document.getElementById('root2')
)
