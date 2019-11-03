import React , {Component} from 'react'
import ReactDOM from 'react-dom'
// import './index.css'


let datajson=[
	{
		id:1,
		name:'水果',
		status:true,
		child:[
			{
				id:1,
				nane:'水果',
				prices:10,
				img:'img/001.gif'
			},
			{
				id:2,
				nane:'水果',
				prices:10,
				img:'img/001.gif'
			},
			{
				id:3,
				nane:'水果',
				prices:10,
				img:'img/001.gif'
			}
		]
	},
	{
		id:2,
		name:'女装',
		status:false,
		child:[
			{
				id:1,
				nane:'女装',
				prices:180,
				img:'img/002.gif'
			},
			{
				id:2,
				nane:'女装',
				prices:180,
				img:'img/002.gif'
			},
			{
				id:3,
				nane:'女装',
				prices:180,
				img:'img/002.gif'
			},
			{
				id:4,
				nane:'女装',
				prices:180,
				img:'img/002.gif'
			}
		]
	},
	{
		id:3,
		name:'男装',
		status:false,
		child:[
			{
				id:1,
				nane:'男装',
				prices:100,
				img:'img/003.gif'
			},
			{
				id:2,
				nane:'男装',
				prices:100,
				img:'img/003.gif'
			},
			{
				id:3,
				nane:'男装',
				prices:100,
				img:'img/003.gif'
			},
			{
				id:4,
				nane:'男装',
				prices:100,
				img:'img/003.gif'
			},
			{
				id:5,
				nane:'男装',
				prices:100,
				img:'img/003.gif'
			}
		]
	}
]

function Titles(props){
	return(
		<ul className="titleUl">
			{
				props.titles.map( v =>
					<li className={'active'+v.status} key={v.id} onClick={()=>{fn(v.id)}}>
						{v.name}
					</li>
				)
			}
		</ul>
	)
}
class Cont extends Component{
	render(){
		return(
			<div className='cont'> 
				{
					this.props.cont.filter(v=>this.props.id == v.id)[0].child.map(v=>
						<dl key={v.id}>
							<dt><img src={v.img} /></dt>
							<dd>
								<p>{v.nane}</p>
								<p>{v.prices}</p>
							</dd>
						</dl>
					)
				}
			</div>
		)
	}
}
function fn(id){
	datajson.map((v)=>{
		v.status=false
		if(v.id==id){
			v.status=true
		}
	})
	
	ReactDOM.render(
		<div>
			<Titles titles={datajson} />
			<Cont cont={datajson} id={id} />
		</div>,
		document.getElementById('root')
	)
}
ReactDOM.render(
	<div>
		<Titles titles={datajson} />
		<Cont cont={datajson} id='1' />
	</div>,
	document.getElementById('root')
)