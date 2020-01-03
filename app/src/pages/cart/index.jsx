import React from 'react'
import './index.less'

export default class extends React.Component {
	render() {
		const { data } = this.props
		return (
			<div className="cart">
				<img src={data.msg ? data.msg : "none.gif"} alt="" />
				<img src="head.gif" alt="" className="userHead" />
				<div className="gender">
					<p>{data.name}</p>
					<p>{data.hospital}</p>
					<p>{data.address}</p>
				</div>
			</div>
		)
	}
}