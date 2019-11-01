import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const name = '1705B设计'
const element = <h1><a href="#">{name + '班级'}</a></h1>

function Op() {
  return '李晓超' + '是班级的一员';
};


const med = <h2>{Op()}</h2>


const obj = {
  name: 'qer',
  name2: 'RRR'
}

const spans = (
  <ul>
    <li>
      {obj.name}

    </li>
    <li>
      {obj.name2}
    </li>
    <li className={obj.name}>
      1111
    </li>
    <li className={obj.name2}>
      2222
    </li>
  </ul>
)

ReactDOM.render(
  // <h1>哈哈哈</h1>,
  // element,
  // med,
  spans,
  document.getElementById('root')
)

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)
