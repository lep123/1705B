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
                      {img:"images/1.jpg",name:"水果",price:"￥100"},
                      {img:"images/2.jpg",name:"水果",price:"￥100"},
                      {img:"images/3.jpg",name:"水果",price:"￥100"},
                      {img:"images/4.jpg",name:"水果",price:"￥100"},
                      {img:"images/5.jpg",name:"水果",price:"￥100"},
                      {img:"images/6.jpg",name:"水果",price:"￥100"}
                    ]
                  },
                  {
                    id:1,
                    bool:true,
                    children:[
                      {img:"images/1.jpg",name:"男装",price:"￥200"},
                      {img:"images/2.jpg",name:"男装",price:"￥200"},
                      {img:"images/3.jpg",name:"男装",price:"￥200"},
                      {img:"images/4.jpg",name:"男装",price:"￥200"},
                      {img:"images/5.jpg",name:"男装",price:"￥200"},
                      {img:"images/6.jpg",name:"男装",price:"￥200"},
                    ]
                  },
                  {
                    id:2,
                    bool:false,
                    children:[
                      {img:"images/1.jpg",name:"女装",price:"￥300"},
                      {img:"images/2.jpg",name:"女装",price:"￥300"},
                      {img:"images/3.jpg",name:"女装",price:"￥300"},
                      {img:"images/4.jpg",name:"女装",price:"￥300"},
                      {img:"images/5.jpg",name:"女装",price:"￥300"},
                      {img:"images/5.jpg",name:"女装",price:"￥300"},
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
//              console.log(0,sectionInfo[0].bool)
//              console.log(1,sectionInfo[1].bool)
//              console.log(2,sectionInfo[2].bool)
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