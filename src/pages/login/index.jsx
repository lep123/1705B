import React , {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import { dologin } from '@/actions/login' 
import qs from 'qs'
import './style.less'

export default 
@connect( state => {

}, {
    dologin
})
@Form.create()
class  extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                 localStorage.setItem('username',values.username)
                 this.props.dologin(qs.stringify(values.username))
                    .then(res => {
                        if(res.payload.status === 200) {
                            this.props.history.push('/')
                        }
                    })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <div className="pages-login">
                <div className="box">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: 'Please input your Password!' },
                                { min: 6, message: '最少输入6位密码'}
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
