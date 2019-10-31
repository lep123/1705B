import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function formatDate (date) {
  return <h3>{date}</h3>
}

function Comment (props) {
  // props 是个对象
  console.log(props)
  return (
    <div className="comment">
      <div className="userInfo">
        <img className="avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />

        <div className="userinfo-name">
          {props.author.name}
        </div>
      </div>
      
      <div className="comment-text">
        {props.text}
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
    text='1705B'
    date={String(new Date())}
  />,
  document.getElementById('root')
)