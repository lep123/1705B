import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'

//ReactDOM.render(
//	<p>11111</p>,
//	document.getElementById('root')
//)


function formatName () {
	return '蜡笔小新' + ' ' + '小白'
}

const html = (
	<h1>
	    {formatName()}
	</h1>
)
	


ReactDOM.render(
	html,
	document.getElementById('root')
)

	

