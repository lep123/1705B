import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

// const name='1705B'
// const element=<p>{name+'班级'}</p>

// function fromatName(){
// 	return '小白'+' '+'小黑'
// }
// const html=(
// 	<h1>
// 		游戏学院{'1705B'+fromatName()}
// 	</h1>
// )

const arrt={
	name:1,
	age:18
}
const html=(
	<div>
		<span dataType='a0'>a0</span>
		<span data={arrt.name}>{arrt.name}</span>
		<span classname='cls'>cla</span>
		<span classanme={arrt.age}>{arrt.age}</span>
	</div>
)
ReactDOM.render(
	// element,
	html,
	document.getElementById('root')
)
