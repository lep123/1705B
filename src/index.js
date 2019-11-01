import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function a(){
	ReactDOM.render(
  	<p>{new Date().getTime()}</p>,
    document.getElementById('root')
  )
}  

setInterval(a,1000)
