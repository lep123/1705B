import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/* function formatDate (date) {
	return <h3>{date}</h3>
}

function Avatar (props) {
	return (
		<img className="avatar" 
			src={props.user.avatarUrl}
			alt={props.user.name}
		/>
	)
}

function UserInfo (props) {
	return (
		<div className="userInfo">
			<Avatar user={props.info} />
			<div className="userinfo-name">
				{props.info.name}
			</div>
		</div>
	)
}

function Comment (props) {
	return (
		<div className="comment">
			<UserInfo info={props.author} />
			<div className="comment-text">
				<p>{props.text}</p>
			</div>
			<div className="comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	)
} */

function Nav (props) {
	return (
		props.title.map( (key,index) => (
			<li key={index} onClick={function (){
				data[0].bool = false
				data[1].bool = false
				data[2].bool = false
				data[index].bool = true
				tab()
			}}>{key.title}</li>
		)) 
	)
}

function  Box(props) {
	return (
		<div className="box">
			<ul className="nav">
				<Nav title={props.title} />
			</ul>
				<Xuan data={props.data}/>
		</div>
	)
}

function Xuan (props) {
	
	return (<div className="bodys">{
		props.data[0].bool?
		props.data[0].root.map( (key,index) => (
			<dl key={index}>
				<dt><img src={key.img} alt="图片"/></dt>
				<dd>
					<p>{key.title}</p>
					<p>促销价<span>{key.cu}</span></p>
				</dd>
			</dl>
		))
		:props.data[1].bool?
		props.data[1].root.map( (key,index) => (
			<dl key={index}>
				<dt><img src={key.img} alt="图片"/></dt>
				<dd>
					<p>{key.title}</p>
					<p>促销价<span>{key.cu}</span></p>
				</dd>
			</dl>
		))
		:
		props.data[2].root.map( (key,index) => (
			<dl key={index}>
				<dt><img src={key.img} alt="图片"/></dt>
				<dd>
					<p>{key.title}</p>
					<p>促销价<span>{key.cu}</span></p>
				</dd>
			</dl>
		))
	}</div>)
		
	
	
}

const title = [
			{title: '水果'},
			{title: '女装'},
			{title: '男装'}
		]
	
const data = [
	{
		
		bool: true,
		root:[
				{
				
					img: 'img/11.jpg',
					title: '@易燃青年 纯棉2019春季翻',
					cu: '￥1?5'
				},
				{
					img: 'img/11.jpg',
					title: '@易燃青年 拼色棒球服男外',
					cu: '￥1?9'
				},
				{
					img: 'img/11.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/11.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/11.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/11.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				}
			]
	},
	{
		bool: false,
		root:[
				{
					img: 'img/22.jpg',
					title: '@易燃青年 纯棉2019春季翻',
					cu: '￥1?5'
				},
				{
					img: 'img/22.jpg',
					title: '@易燃青年 拼色棒球服男外',
					cu: '￥1?9'
				},
				{
					img: 'img/22.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/22.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/22.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/22.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				}
			]
	},
	{
		bool: false,
		root:[
				{
					img: 'img/33.jpg',
					title: '@易燃青年 纯棉2019春季翻',
					cu: '￥1?5'
				},
				{
					img: 'img/33.jpg',
					title: '@易燃青年 拼色棒球服男外',
					cu: '￥1?9'
				},
				{
					img: 'img/33.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/33.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/33.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				},
				{
					img: 'img/33.jpg',
					title: '@易燃青年 拼色外套男翻领',
					cu: '￥1?9'
				}
			]
	}
	
	
]

tab()
function tab() {
	ReactDOM.render(
	  <Box data={data} title = {title}/>,
	  document.getElementById('root')
	)
}

