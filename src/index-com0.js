import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function formatDate (date) {
  return <h3>{date}</h3>
}

// 建议从组件自身的角度命名 props 而不是依赖于调用组件的上下文命名
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
    <div className="userinfo">
      <Avatar user={props.author} />
      <div className="userinfo-name">
        {props.author.name}
      </div>
    </div>
  )
}

function Comment (props) {
  // props 是个对象
  console.log(props)
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      
      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

// 为什么要提取组件?

ReactDOM.render(
  <Comment
    author={{
      avatarUrl: 'https://www.baidu.com/img/bd_logo1.png',
      name: 'xsa',
    }}
    text='1705B'
    date={String(new Date())}
  />,
  document.getElementById('root')
)
