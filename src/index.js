import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function textStrong(res) {
	return <b>{res}</b>
}

const goods = [{
	id: 1,
	child: [{
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/1.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}]
}, {
	id: 2,
	child: [{
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/2.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}]
}, {
	id: 3,
	child: [{
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}, {
		url: "image/3.jpg",
		name: "呜呜呜呜呜呜呜呜无无无无无无无无无无无无无无无无无无无无无无无无"
	}]
}]

const titleName = [{
	id: 1,
	name: "水果",
	bol: true
}, {
	id: 2,
	name: "女装",
	bol: false
}, {
	id: 3,
	name: "男装",
	bol: false
}, ]

function fn(id) {
	console.log(id)
	ReactDOM.render(
		<div>
			<Shoping />
			<Goods search={id}/>
		</div>,
		document.getElementById("root")
	)
}

class Goods extends Component {
	render() {
		console.log()
		/*let content = goods.filter(v => this.props.search == v.id)
		console.log(content[0])
		content[0].child.map(v => <h3>{v.name}</h3>)*/
		return (
			<div className="goods">
				{
					goods.filter(v => this.props.search == v.id)[0]
					.child.map(v => <h3>
						<img src={v.url} />
						<span>{v.name}</span>
						<p><b>促销价</b><i>￥1？5</i></p>
					</h3>)
				}
			</div>
		)
	}
}

class Shoping extends Component {
	render() {
		return (
			<p className="title">
				{titleName.map(v => <span
					onClick={() => {
						fn(v.id)
					}}
					id={v.id}>{v.name}</span>)}
			</p>
		)
	}
}
ReactDOM.render(
	<div>
		<Shoping />
		<Goods search="1"/>
	</div>,
	document.getElementById("root")
)