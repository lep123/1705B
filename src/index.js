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

// 用户组件
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
}

ReactDOM.render(
  <Comment 
    author={{
      avatarUrl: 'https://www.baidu.com/img/bd_logo1.png',
      name: 'xsa',
    }}
    text='1705B1705B1705B1705B1705B1705B1705B1705B1705B1705B1705B'
    date={String(new Date())}
  />,
  document.getElementById('root')
)
