import React from 'react'
import ReactDOM from 'react-dom'

const form = (
  <form>
    <input type="text" />
    <select>
      <option>option</option>
      <option>option</option>
      <option>option</option>
    </select>
  </form>
)

ReactDOM.render(
  form,
  document.getElementById('root')
)