import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
	
	
	//数据
	const data = [
		{
			"id":0,
			"status":true,
			"titles":"水果",
			"goods":[
				{	 "id":0,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":1,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":2,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":3,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":4,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":5,
					 "imgs":"1.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				
			],
		},
		{	
			"id":1,
			"status":false,
			"titles":"女装",
			"goods":[
				{	 "id":0,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":1,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":2,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":3,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":4,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":5,
					 "imgs":"2.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				
			],
		},
		{	
			"id":2,
			"status":false,
			"titles":"男装",
			"goods":[
				{	 "id":0,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":1,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":2,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":3,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":4,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				{	 "id":5,
					 "imgs":"3.png",
					 "titles":"@易燃青年 纯棉2019春季款 ",
					 "prices":175,
				},
				
			]
		}
	]
	
	//点击类型后 对应的得到当前这条对象 
	// 把点击的对象的status值改变为true 其它的变为false
	//并且拿到当前的这条数据
	function typeCut(item) {
		data.map(v => (
			v.id==item.id ? v.status=true : v.status=false
		))
		const  datas= data.filter(v => v.status==true)
		 Renders (datas)
	}
	//头部
	//通过props接受传递的数据进行渲染
	//添加点击事件传递当前点击的对应对象
	function Heads (props) {
		const data = props.data
		return (
			<div> 
				{
					data.map(item => 
					<h2 key={item.id} 
					className={item.status ? "headersTrue" : 'headers'}
					onClick={() => {
						typeCut(item)
					}}>
					{item.titles}
					</h2>)
					
				}
			</div>
		)
	}
	//主体
	//取到当前匹配的这条数据进行渲染
	function Content (props) {
		
		const dataGoods = props.data[0].goods
		console.log(dataGoods)
		
		return (
			dataGoods.map(v =>
				(
				<dl className='listType'>
					<dt>
						<img src={v.imgs} />
					</dt>
					<dd>
					<p>{v.titles}</p>
					<p>促销价<span>{v.prices}</span></p>
					</dd>
				</dl>
				)
			)
		)
			
			
		
	}
	
	
	//封装render
  function Renders (datas) {
	  ReactDOM.render(
	  	<div className="box">
	  		<Heads  data={data}/>
	  		<div className="bodys">
				<Content data={datas}/>
			</div>
	  	</div>,
	    document.getElementById('root')
	  )
	  
  }
  Renders (data.filter(v => v.status==true))


