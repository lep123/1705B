import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let arr = ['水果','男装','女装']
let sectionInfo =[
                  {
                    id:0,
                    children:[
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
                              {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"}
                            ]
                  },
                  {
                    id:1,
                    children:[
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥275"}
                    ]
                  },
                  {
                    id:2,
                    children:[
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"},
                      {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥375"}
                    ]
                  }
]


function Info() {
  var count
  return (
    <div>
      
      <ul>
        {
          arr.map(function(ele,index,arr){
              /*Each child in an array or iterator should have a unique "key" prop.*/
              
              return <li key={index} className="lis" onClick={function() {
                count = {index}.index
                console.log(count)
              }}>{ele}</li>
          })
        }
      </ul>
      {/* <div>
        
        {
          console.log(count),
          sectionInfo[0].children.map(function(ele,index,arr){
            console.log(ele.img)
            return (
              <dl key={index}>
                <dt>
                  
                  <img src={ele.img} />
                </dt>
                <dd>
                  <p>{ele.name}</p>
                  <p>{ele.price}</p>
                </dd>
              </dl>
            )
          })
        }
      </div> */}
    </div>
  )
}

ReactDOM.render(
  <Info/>
  ,document.getElementById('root')
)

// function Imgs(porps) {
//   return (
//     <div>
//     <img src={porps.porps} />
//     </div>
//   ) 
  
// }


// function User(propos) {
//   return (
//     <div>
//       <Imgs porps={propos.propos.avatarUrl}/>
//     <p>{propos.propos.name}</p>
//     </div>
//   )
// }

// function Comment(propos) {
//   console.log(propos)
//   return (
//     <div>
//       <User propos={propos.author} />

//       <li>{propos.text}</li>
//       <li>{propos.date}</li>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Comment
//     author = {{
//       avatarUrl:'https://www.baidu.com/img/bd_logo1.png',
//       name:'xsa',
//     }}
//     text = "内容啊实打实风微风维吾尔个人个人"
//     date = {String(new Date())}
//   />,document.getElementById('root')
// )




