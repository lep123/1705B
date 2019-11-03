import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const arr= ['小白','小黑','小花']

ReactDOM.render(
	<ul>
		{
			arr.map((v, k) => <li key={k}>{v}</li>)
		}
	</ul>,
	document.getElementById('root')
)