import React from 'react';
import './index.less'
import { Icon } from 'antd'

export default class extends React.Component {
	colse = (e) => {
		let box = document.getElementById('posi')

		if (box.className === 'close') {
			box.className = 'posi'
		} else {
			box.className = 'close'
		}


	}
	render() {
		return (
			<div className="posi" id="posi">
				<img src="1.png" alt="" />
				<Icon type="close" className="" onClick={this.colse} />
			</div>
		)
	}
}