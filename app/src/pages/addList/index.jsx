import React from 'react'
import axios from 'axios'
import Cart from '@/pages/cart'
import './index.less'


export default class extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		axios.get('/api/index.php/home/v5/getuser').then(res => {
			console.log(res)
			this.setState({
				data: res.data.users
			})
		})
	}

	render() {
		const { data } = this.state
		return (
			<div className="addlist">
				{
					data.map(v => {
						return (
							<Cart key={v.id} data={v} />
						)
					})
				}
			</div>
		)
	}
}