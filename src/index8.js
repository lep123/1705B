import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Welcome = function (props) {
  return <h1>{props.name}</h1> 
}

function App () {
  return (
    <div>
      <Welcome name="A0" />
      <Welcome name="A1" />
      <Welcome name="A2" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)