import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Person extends Component {
  render() {
    return (
      <div>
        <p>狗蛋</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Person option={{name: '狗蛋', age: 18}}/>,
  document.getElementById('root')
)




// function Welcome (props) {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//       <p>1</p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <>
//     <Welcome name="狗蛋1" age="18"/>
//     <Welcome name="狗蛋2" age="20"/>
//     <Welcome name="狗蛋3" age="22"/>
//   </>,
//   document.getElementById('root')
// )


// const fn = (option, op2)=> {
//   console.log(op2)
// }

// ReactDOM.render(
//   <ul>
//     <li onClick={() => {
//       fn(2222,3333)
//     }}>点击我</li>
//     <li onMouseOver={() => {
//       fn(4444,6666)
//     }}>huaguo</li>
//   </ul>,
//   document.getElementById('root')
// )

// const html = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello world',
// )

// const num = 0 
// let element = ''

// if(num > 1) {
//   element = <h1>1705B</h1>
// } else {
//   element = <h1>1706B</h1>
// }

// element = <div>{element}</div>

// const arr = ['小白', '小黑', '小粉', '小红']



// ReactDOM.render(
//   <ul>
//     {
//       arr.map((v, k) => <li key={k}>{v}</li>)
//     }
//   </ul>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <ul>
//   {
//     [
//       <li>111</li>,
//       <li>222</li>,
//     ]
//   }
// </ul>,
//   document.getElementById('root')
// )
