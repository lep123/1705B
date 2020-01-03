import React from 'react'
import axios from 'axios'
import './index.less'


export default class extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		axios.get('/api/index.php/home/v5/getuser').then(res => {
			
		})
	}

	render() {
		return (
			<div className="addlist">

			</div>
		)
	}
}