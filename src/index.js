import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let arr = ['水果','男装','女装']
let sectionInfo =[
                  {
                    id:0,
                    bool:false,
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
                    bool:true,
                    children:[
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                      {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
                    ]
                  },
                  {
                    id:2,
                    bool:false,
                    children:[
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                      {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
                    ]
                  }
]


function Co() {
  return (
    <div>
        {
          sectionInfo[0].bool?
          sectionInfo[0].children.map(function(ele,index,arr){
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
          }):sectionInfo[1].bool?
          sectionInfo[1].children.map(function(ele,index,arr){
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
          }):
          sectionInfo[2].children.map(function(ele,index,arr){
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
      </div>
  )
}
function Info() {
  return (
    <div>
      <ul>
        {
          arr.map(function(ele,index,arr){
              /*Each child in an array or iterator should have a unique "key" prop.*/
              
              return (
                <li key={index} className="lis" onClick={function() {
                let count = {index}.index
                sectionInfo[0].bool = false;
                sectionInfo[1].bool = false;
                sectionInfo[2].bool = false;
                sectionInfo[count].bool = true;
                console.log(0,sectionInfo[0].bool)
                console.log(1,sectionInfo[1].bool)
                console.log(2,sectionInfo[2].bool)
                con1()
              }}>{ele}</li>
              )
          })
        }
      </ul>
      <Co/>
    </div>
    
  )
}
con1()
function con1 (){
  ReactDOM.render(
    <div>
      <Info/>
      
    </div>
    ,document.getElementById('root')
  )
}



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




