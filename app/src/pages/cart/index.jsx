import React from 'react'
import './index.less'

export default class extends React.Component {
	render() {
		const { data } = this.props
		console.log(data)
		return (
			<div className="cart">
				<img src={data.msg} alt="" />
			</div>
		)
	}
}