import React from 'react'
import ReactDOM from 'react-dom'

const arr = ['Alice', 'Emily', 'Kate']

// const element = arr.map((value, key) => <p key={key}>{value}</p>)
const element = (
  <div>
    {arr.map((value, key) => <p key={key}>{value}</p>)}
  </div>
)

ReactDOM.render(
  element,
  document.getElementById('root')
)