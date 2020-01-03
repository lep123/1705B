import React from 'react';
import './styles.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default @Form.create({ name: 'normal_login' })
class extends React.Component {
// dasasdsdasddd
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	registered(){
		this.props.history.push('/registered')
	}


	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="box">
				<div className="login_body">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入用户名' }],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码' }],
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
								登录
							</Button>
							<Button onClick={this.registered} type="danger">
								注册
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}