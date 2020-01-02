import React from 'react'
import ReactDOM from 'react-dom'

// function fn () {
//   console.log('fn')
// }

// const element = (
//   <div>
//     <button onClick={fn}>click me</button>
//     <button onMouseOver={fn}>mouseover me</button>
//   </div>
// )

function fn (e, option) {
  console.log(e, option)
}

const element = (
  <div>
    <button onClick={function (event) {
      fn(event, '我是click')
    }}>click me</button>
    <button onMouseOver={function (event) {
      fn(event, '我是mouseover')
    }}>click me</button>
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
)


