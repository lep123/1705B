import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Person extends Component {
    render() {
        return (
            <div>
                <p>狗蛋</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Person option={{name: '狗蛋', age: 18}}/>,
    document.getElementById('root')
)