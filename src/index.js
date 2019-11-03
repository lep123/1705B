import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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