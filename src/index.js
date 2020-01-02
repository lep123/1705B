<<<<<<< HEAD
import React, { PureComponent } from 'react'
=======
import React, { Component } from 'react'
>>>>>>> e1cf91e55c466aaf9947c3503b9c8ea949eccaa7
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import cs from 'classnames'
import qs from 'qs'
import './index.css'

<<<<<<< HEAD
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
=======
const goods = [{
	"id": 1,
	child: [{
		id: 1,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}, {
		id: 2,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}, {
		id: 3,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}, {
		id: 4,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}, {
		id: 5,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}, {
		id: 6,
		url: "img/1.gif",
		name: "1----------------------------------------------------",
		price: "￥1"
	}]
}, {
	"id": 2,
	child: [{
		id: 1,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}, {
		id: 2,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}, {
		id: 3,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}, {
		id: 4,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}, {
		id: 5,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}, {
		id: 6,
		url: "img/2.gif",
		name: "2----------------------------------------------------",
		price: "￥2"
	}]
}, {
	"id": 3,
	child: [{
		id: 1,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}, {
		id: 2,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}, {
		id: 3,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}, {
		id: 4,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}, {
		id: 5,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}, {
		id: 6,
		url: "img/3.gif",
		name: "3----------------------------------------------------",
		price: "￥3"
	}]
}]

const title = [{
	id: 1,
	name: "第一个",
	color: true
},
{
	id: 2,
	name: "第二个",
	color: false
},
{
	id: 3,
	name: "第三个",
	color: false
}]

function fn(id) {
	ReactDOM.render(
		<div>
			<Shooping />
			<Goods search={id} />
		</div>,
		document.getElementById('root')
	)
}

class Goods extends Component {
	render() {
		return (
			<div className="goods">
				{
					goods.filter(v => this.props.search == v.id)[0].child.map((v) => <h3 key={v.id}>
						<img alt={v.name} src={v.url} />
						<span>{v.name}</span>
						<p><b>促销价</b><i>{v.price}</i></p>
					</h3>)
				}
			</div>
		)
	}
}


class Shooping extends Component {
	render() {
		return (
			<p className="color">
				{title.map((v) => <span key={v.id} onClick={() => {
					fn(v.id)
				}} id={v.id}>{v.name}</span>)}
			</p>
		)
	}
}

ReactDOM.render(
	<div>
		<Shooping />
		<Goods search="1" />
	</div>,
	document.getElementById('root')
)
>>>>>>> e1cf91e55c466aaf9947c3503b9c8ea949eccaa7
