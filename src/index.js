import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// class Element extends Component {
//   render() {
//     click4 =  () => {
//       console.log( this.list ) //ref内可以直接在组件this内的属性内存入标签
//       this.list.style.color = "white"
//       this.list.style.backgroundColor = "#f03"
//     }
//     return (
//       <div>
//         <input ref={(e)=>{ this.list=e} } type='button' value='ref属性:函数式的引用方式' onClick = {this.click4} />
//       </div>
//     )
//   }
// }

// class Inpues extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       name:"",
//       value:"coconut",
//       radio1:false,
//       radio2:false,
//       check1:false,
//       check3:false,
//       check4:false,
//       check2:false
//     }
//   }
//   btn = (e) => {
//     this.setState({
//       name:e.target.value
//     })
//   }
//   handleChange = (event) => {
//     console.log(event.target.value)
//     this.setState({value: event.target.value});
//   }
//   one = () =>{
//     this.setState({
//       check1:false,
//       check3:false,
//       check4:false,
//       check2:false
//     })
//   }
//   checkall = () => {
//     this.setState({
//       check1:true,
//       check2:true,
//       check3:true,
//       check4:true,
//     })
//   }
//   checkfan = () => {
//     this.setState({
//       check1:!this.state.check1,
//       check2:!this.state.check2,
//       check3:!this.state.check3,
//       check4:!this.state.check4,
//     })
//   }
//   checked1 = () => {
//     this.setState({
//       check1:!this.state.check1,
//     })
//   }
//   checked2 = () => {
//     this.setState({
//       check2:!this.state.check2,
//     })
//   }
//   checked3 = () => {
//     this.setState({
//       check3:!this.state.check3,
//     })
//   }
//   checked4 = () => {
//     this.setState({
//       check4:!this.state.check4,
//     })
//   }

//   render() {
//     return (
//       <>
//         {/* <input type="text"
//         value={this.state.name}
//         onChange={this.btn}
//         /> */}
//         {/* <input type="radio" checked = {this.state.radio1}  name="sex"/> */}
//         {/* <input type="radio" checked = {this.state.radio2} name="sex"/> */}
//         <label>苹果</label><input type="checkbox" checked = {this.state.check1} onChange = {this.checked1} />
//         <label>芒果</label><input type="checkbox" checked = {this.state.check2}  onChange = {this.checked2}/>
//         <label>橘子</label><input type="checkbox" checked = {this.state.check3}  onChange = {this.checked3}/>
//         <label>香蕉</label><input type="checkbox" checked = {this.state.check4}  onChange = {this.checked4}/>
//         <select value={this.state.value} onChange={this.handleChange}>
//           <option value="grapefruit">葡萄柚</option>
//           <option value="lime">酸橙</option>
//           <option value="coconut">椰子</option>
//           <option value="mango">芒果</option>
//         </select>
//         <button onClick={this.one}>重置</button>
//         <button onClick={this.checkall}>全选</button>
//         <button onClick={this.checkfan}>反选</button>
//       </>
//     )
//   }
// }

export default class Inpues extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bool:true,
      name:"",
      pass:"",
      username:" ",
      userpass:" "
    }
  }
  userLogin = (e) => {
    this.setState({name:e.target.value})
    // this.state.name.length <= 10?
    // this.setState({username: ""}):
    // this.setState({username: "账号错误"})
    // this.setState({bool:this.boolname()})
    if(this.state.name.length >= 10 && this.state.name.length == 0){
      this.setState({username: "密码错误"})
    }
    this.passname()
  }
 passname = () => {
  if(this.state.name.length >= 10 || this.state.name.length == 0 || this.state.pass.length >= 10 || this.state.pass.length == 0){
    this.setState({bool: true})
  }else{
    this.setState({bool: false})
  }
 }
  userPass = (e) => {
    this.setState({pass:e.target.value})
    // this.state.pass.length >= 10?
    // this.setState({userpass: "密码错误"}):
    // this.state.pass.length == 0?
    // this.setState({userpass: " "}):
    // this.setState({userpass: ""})
    if(this.state.pass.length >= 10 && this.state.pass.length == 0){
      this.setState({userpass: "密码错误"})
    }
    this.passname()
    // this.setState({bool:this.boolname()})
  }
  render() {
    return (
      <div>
        <li>
          <input type="text" placeholder="login" onChange={this.userLogin} value = {this.state.name}/>
          {this.state.username}
        </li>
        <li>
          <input type="text" placeholder="pass" onChange={this.userPass} value = {this.state.pass}/>
          {this.state.userpass}
        </li>
        <button disabled={this.state.bool}>登陆</button>
      </div>
    )
    }
}

/**
 * 1. 图片引入
 * 2. 路由传参
 * 3. 路由参数解析
 * 4. 路由选中Link
 * 5. 
 * 6. ajax 请求放在哪
 ****** 7. props 监听
 * 8. JSON
 * 9. 变量提升 先定义
 * 10. 路由监听 /abc/:id
 * 11. redux react-redux classnams qs
 * 12. sho 路由 PureCompoent
 */

// antd JSON props 监听 axios

function G2 (props) {
  return (
    <div>
      组件P1
    </div>
  )
}

class A extends React.Component {
  render () {
    return (
      <div>2222</div>
    )
  }
}

class Router extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      p1: false,
      p2: false,
    }
  }

  componentWillReceiveProps () {
    
  }

  componentDidMount () {
    // this.isNone('p1')
  }

  isNone = value => {
    this.setState({
      p1: false,
      p2: false,
    })
    
    if (value === 'p1') {
      this.setState({
        p1: !this.state.p1
      })
    } else {
      this.setState({
        p2: !this.state.p2
      })
    }
    
    // this.setState({
    //   [value]: !this.state[value],
    // })
  }

  render () {
    return (
      <BrowserRouter>
        <p>
          <Link 
            className={cs({ active: this.state.p1 })}
            // className={this.state.p1 ? 'active' : ''}
            to={{pathname: '/'}} 
            onClick={() => this.isNone('p1')}
          >
            P1
          </Link>
        </p>
        <p>
          <Link
            onClick={() => this.isNone('p2')} 
            to="/g2?name=1&age=22"
            // className={this.state.p2 ? 'active' : ''}
            className={cs({ active: this.state.p2 })} 
          >
            P2
          </Link>
        </p>

        <Switch>
          <Route path="/g2" component={G2} />
          <Route path="/abc/:id" component={A} />
          <Route exact path="/" component={G1} />
        </Switch>
      </BrowserRouter>
    )
  }
}





// let arr = ['水果','男装','女装']
// let sectionInfo =[
//                   {
//                     id:0,
//                     bool:false,
//                     children:[
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"},
//                       {img:"images/a1_03.gif",name:"水果水果111111111111111111",price:"￥175"}
//                     ]
//                   },
//                   {
//                     id:1,
//                     bool:true,
//                     children:[
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                       {img:"images/a1_03.gif",name:"22222222222222222222222",price:"￥275"},
//                     ]
//                   },
//                   {
//                     id:2,
//                     bool:false,
//                     children:[
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                       {img:"images/a1_03.gif",name:"333333333333333333333333",price:"￥375"},
//                     ]
//                   }
// ]


// function Co() {
//   return (
//     <div>
//         {
//           sectionInfo[0].bool?
//           sectionInfo[0].children.map(function(ele,index,arr){
//             return (
//               <dl key={index}>
//                 <dt>
                  
//                   <img src={ele.img} />
//                 </dt>
//                 <dd>
//                   <p>{ele.name}</p>
//                   <p>{ele.price}</p>
//                 </dd>
//               </dl>
//             )
//           }):sectionInfo[1].bool?
//           sectionInfo[1].children.map(function(ele,index,arr){
//             return (
//               <dl key={index}>
//                 <dt>
                  
//                   <img src={ele.img} />
//                 </dt>
//                 <dd>
//                   <p>{ele.name}</p>
//                   <p>{ele.price}</p>
//                 </dd>
//               </dl>
//             )
//           }):
//           sectionInfo[2].children.map(function(ele,index,arr){
//             return (
//               <dl key={index}>
//                 <dt>
                  
//                   <img src={ele.img} />
//                 </dt>
//                 <dd>
//                   <p>{ele.name}</p>
//                   <p>{ele.price}</p>
//                 </dd>
//               </dl>
//             )
//           })
//         }
//       </div>
//   )
// }
// function Info() {
//   return (
//     <div>
//       <ul>
//         {
//           arr.map(function(ele,index,arr){
//               /*Each child in an array or iterator should have a unique "key" prop.*/
              
//               return (
//                 <li key={index} className="lis" onClick={function() {
//                 let count = {index}.index
//                 sectionInfo[0].bool = false;
//                 sectionInfo[1].bool = false;
//                 sectionInfo[2].bool = false;
//                 sectionInfo[count].bool = true;
//                 console.log(0,sectionInfo[0].bool)
//                 console.log(1,sectionInfo[1].bool)
//                 console.log(2,sectionInfo[2].bool)
//                 con1()
//               }}>{ele}</li>
//               )
//           })
//         }
//       </ul>
//       <Co/>
//     </div>
    
//   )
// }
// con1()
// function con1 (){
//   ReactDOM.render(
//     <div>
//       <Info/>
      
//     </div>
//     ,document.getElementById('root')
//   )
// }



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




class G1 extends React.Component {
  render () {
    return <div>子组件333333333</div>
  }
}

class Zi extends PureComponent {
  // 返回false
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log(nextState)
  //   if (nextProps.users === this.props.users) {
  //     return false
  //   }
  //   return true
  // }

  render () {
    console.log('子组件渲染了')
    return <div>{this.props.users}</div>
  }
}

class Fu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '小花'
    }
  }

  setName = () => {
    this.setState({
      name: '小花'
    })
  }

  render () {
    // console.log(this.state.name)
    return (
        <div>
          <marquee
            direction="up" 
            height="30" id="mq">
            <div>aaa X</div><div>bbb X</div><div>ccc X</div>
          </marquee>
        </div>
    )
  }
}

ReactDOM.render(
  <Fu />,
  document.getElementById('root')
)
