import React from 'react'
import axios from 'axios'
import './index.less'


export default class extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		axios.get('/api/index.php/home/v5/getuser').then(res => {
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
							<div>
								{v.name}
							</div>
						)
					})
				}
			</div>
		)
	}
}