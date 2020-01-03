import React , {Component} from 'react';
import Left from './left'
import Right from './right/index'
import './style.less'
/*得得得得得得得得得得*/
//11111111
export default class Home extends Component {

    constructor (props) {
        super(props)
        //路由守卫
        if(!localStorage.getItem('username')) {
            //没有登陆跳到登录页面
            props.history.push('/login')
        }

    }

    render() {
        return(
            <div className="pages-home">
                <Left />
                <Right />
            </div>
        )
    }
}
