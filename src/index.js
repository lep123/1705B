import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const html = React.createElement(
	'p',
	{className: 'active'},
	'555'
)

ReactDOM.render( 
	html,
	document.getElementById('root')
)
