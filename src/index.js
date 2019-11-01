import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

const name = "1705B"
const element = <div>{name+'班'}</div>
const count = '20人'
const num = <div>{element}{count}</div>
ReactDOM.render(
  num,
  document.getElementById('root')
)
const from = {
  name:"小明",
  age:"20",
  img:"logo192.png"
}
function dag(){
  return from.name + '' + from.age
}
function tick(){
  dag()
}
const htmls = (
  <div className = {from.name}>
    {dag()}
    <p>
    {new Date()}
    </p>
  </div>
)
setTimeout(tick,1000)
ReactDOM.render(
  htmls,
  document.getElementById('root1')
)



let maStyle = {
  fontSize: 20,
  color: "red",
  marginTop:20
}
let numbers = 1;
let countnum = false?'已售':'未受'
ReactDOM.render(
  <div style={maStyle}>
    {countnum}
    <button onClick= {
      //点击事件
      function fn () {
        console.log(1)
      }
    }>click me</button>
    <img src={from.img} />
    
    <p>{ numbers == 2 ?"true":"fasle"}</p>
  </div>,
  document.getElementById('root2')
)


var names = ['Alice', 'Emily', 'Kate']; 
ReactDOM.render(
    <div>
        {
            names.map(function(ele,index,arr){
                /*Each child in an array or iterator should have a unique "key" prop.*/
                return <h1>{ele}</h1>
            })
        }
    </div>, document.getElementById('example') 
)

