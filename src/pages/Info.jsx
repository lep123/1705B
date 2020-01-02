import React, { Component } from 'react'
import Tike from './tike.jsx'
import Son from './son.jsx'

export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state={
            name1:"小红",
            name2:"小敏"
        }
    }
    btn = (option) => {
        // console.log(option)
        this.setState({
            name1:option,
            name2:option
        })
    }
    render(){
        return (
            <>
                <div></div>
                <Tike 
                    name={this.state.name1}
                    fn = {this.btn}
                    />
                <Son 
                    name={this.state.name2}
                    fn = {this.btn}
                    />
            </>
        )
    }

}
    // constructor(porps){
    //     super(porps)
    //     this.state = {
    //         time:new Date("2019-11-06 00:00:00") - new Date(),
    //         name:"倒计时"
    //     }
    // }
    // //更新前调用
    // componentWillMount() {
    //     console.log('componentWillMount','-------------')
    // }
    // // 只有在接收新的prop参数是调用
    // componentWillReceiveProps () {
    //     console.log('componentWillReceiveProps','///////////////////')
    // }
    // 在不需要更新是调用
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate ','*********')
    // }
    // 更新时调用
    // componentWillUpdate() {
    //     console.log('componentWillUpdate','_________')
    // }
    // 更新后调用
    // componentDidUpdate () {
    //     console.log('componentDidUpdate ','??????????')
    // }
    // 渲染后调用，只会调用一次
//     componentDidMount(){
//         // console.log('componentDidMount','+++++++++++++')
//         setInterval(() => {
//             this.tick()
//         }, 1000);
//     }
//     // 封装的加'0'函数
//     fn(num) {
//         if(num<10){
//             num = "0"+num
//             return num
//         }else{
//             return num
//         }
//     }
//     //封装的倒计时
//     times() {
//         let shi = parseInt(this.state.time / (1000*60*60))
//         let fen = parseInt((this.state.time - shi*1000*60*60) / (1000*60))
//         let miao = parseInt((this.state.time - shi*1000*60*60 - fen*1000*60) / 1000)
//         return this.fn(shi)+":"+this.fn(fen)+":"+this.fn(miao)
//     }
//     // 修改state
//     tick () {
//         this.setState({
//             time:new Date("2019-11-06 00:00:00") - new Date(),
//             name:this.times()
//         })
//     }



//   render() {
//     return (
//         <div>
//             <Tike name={this.state.time}/>
//             <span>
//                 {this.state.time}<br></br>
//                 {this.state.name}
//             </span>
//         </div>
      
//     )
//   }
// }



// import React, { Component } from 'react'

// export default class Info extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             time:new Date()
//         }
//     }
    
//     componentDidMount() {
//         setInterval(() => this.tick(), 1000);
//     }
//     tick () {
//         this.setState({
//             time:new Date()
//         })
//     }
//   render() {
//     console.log(111)

//     return (
//       <div>
//         <p>{this.state.time.toLocaleTimeString()}</p>
//       </div>
//     )
//   }
// }


