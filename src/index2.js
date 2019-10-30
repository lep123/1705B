import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const user = {
  firstName: '小花',
  lastName: '小白',
}

function formatName (userInfo) {
  return userInfo.firstName + ' ' + user.lastName
}

const html = (
  <h1>
    {formatName(user)}
  </h1>
)

ReactDOM.render(
  html,
  document.getElementById('root')
)
