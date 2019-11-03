import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './workOne.css'

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      cut: [
        {
          name: '水果',
          content: [
            {
              class: "red",
              price: '',
              imgUrl: ''
            }
          ]
          
        },
        {
          name: '女装',
          content: [
            {
              class: "blue",
              price: '',
              imgUrl: ''
            }
          ]
          
        },
        {
          name: '男装',
          content: [
            {
              class: "@易燃青年 纯棉2019春季翻",
              price: '1?5',
              imgUrl: 'images/1_03.png'
            },
            {
              class: "@易燃青年 纯棉2019春季翻",
              price: '1?5',
              imgUrl: 'images/1_05.png'
            },
            {
              class: "@易燃青年 纯棉2019春季翻",
              price: '1?5',
              imgUrl: 'images/1_07.png'
            },
          ]
          
        }
      ]
    }
  }
  itemNav = (index) =>{
    this.setState({
      current: index
    })
  }
  render() {
    return (
      <div className="top">
        <ul>
        {this.state.cut.map((item, index)=> {
          return (
            <li key= {index} className={ index === this.state.current ? 'state-active' : ''} onClick= {() => {this.itemNav(index)}}>{item.name}</li>
          )
        })}
        </ul>
        {this.state.cut.map((item, index) => {
          return (
            <section key={index} className={index === this.state.current ? 'state-active' : 'hide'}>
              
                <dl>
                  <dt><img src={item.content.imgUrl}/></dt>
                  <dd>
                    <p>{item.name}</p>
                    <p>{item.content.price}</p>
                  </dd>
                </dl>
              </section>
          )
          })}
        
      </div>
    )
  }
}


ReactDOM.render(
  <Person/>,
  document.getElementById('root')
)

