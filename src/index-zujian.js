import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

function fromatDate(date){
	console.log(date)
	return <h3>{date}</h3> 
}

function Avatar (props){
	return (
		<img className='avatar' 
			src={props.user.avatarUrl}
		/>
	)
}

function UserInfo (props){
	return(
		<div className='userInfo'>
			<Avatar user={props.info} />
			<div className='userinfo-name'>
				{props.info.name}
			</div>
		</div>
	)
}
function Comment(props){
	return(
		<div className='comment'>
			<UserInfo info={props.author} />
			<div className='comment-text'>
				<p>{props.text}</p>
			</div>
			<div className='comment-date'>
				{fromatDate(props.date)}
			</div>
		</div>
	)
}


ReactDOM.render(
	<Comment 
		author={
			{
				avatarUrl:'//www.baidu.com/img/bd_logo1.png',
				name:'jxl'
			}
		}
		text='123456789'
		date={String(new Date())}
	 />,
	document.getElementById('root')
)