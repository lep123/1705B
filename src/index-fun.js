import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// const fn = (value)=>{
// 	console.log(value)
// }

// ReactDOM.render(
// 	<ul>
// 		<li onClick={()=>{fn('a')}}>秀我?</li>
// 		<li onMouseOver={()=>{fn('a')}}>划过?</li>
// 	</ul>,
// 	document.getElementById('root')
// )

// class Welcome extends React.Component{
// 	render(){
// 		return <h1>33</h1>
// 	}
// }

function Welcome (props){
	return (
		<div>
			<p>{props.name+props.age}</p>
			<p>{props.name}</p>
			<p>123</p>
		</div>
	)
}

ReactDOM.render(
	<>
		< Welcome name='name' age='18'/>
		< Welcome name='name' />
		< Welcome />
	</>,
	document.getElementById('root')
)
