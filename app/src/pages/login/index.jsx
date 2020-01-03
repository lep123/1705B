import React from 'react';
import './styles.less';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { post } from '@/utils/request'
import services from '@/services/api'

export default
@Form.create({ name: 'normal_login' })
class extends React.Component {
// dasasdsdasddd
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				post(services.log , values).then(res => {
					console.log(res)
				})
			}
		});
	};

	registered = () => {
		this.props.history.push('/registered')
	}

	validator = (rule, value, callback) => {
		const val = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/img
		if (value && !value.match(val)) {
			callback('字母数字结合')
		} else {
			callback()
		}
	}


	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="box">
				<div className="login_body">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [
									{
										required: true,
										message: '请输入用户名'
									}
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="用户名"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [
									{
										validator: this.validator
									},
									{
										required: true,
										message: '请输入密码'
									}
								],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
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