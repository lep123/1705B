import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import './index.css'

class Person extends Component {
	
	render(props){
		console.log(this.props.options.name)
		return <p>小白</p>
	}
}

ReactDOM.render(
	<Person options={ {name:'小白', age:18} } />,
	document.getElementById('root')
)
