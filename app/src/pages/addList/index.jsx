import React from 'react'
import Cart from '@/pages/cart'
import { addList } from '@/services'
import './index.less'

export default class extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		addList().then(res => {
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