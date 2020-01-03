import React from 'react';
import './styles.less';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { ce } from '@/services/'

export default @connect(state => {

}, {

})
@Form.create({ name: 'normal_login' })
class extends React.Component {

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if (values.password === values.truepassword) {
					const obj = {
						username: values.username,
						pwd: values.password
					}
					ce(obj).then(res => {
						if (res.data.status === 200) {
							message.info('注册成功')
						} else {
							message.info('注册失败,用户名已存在')
						}
					})
				} else {
					message.info('确认密码输入错误')
				}
			}
		});
	};

	validator = (rule, value, callback) => {
		const val = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/img
		if (value && !value.match(val)) {
			callback('字母数字结合')
		} else {
			callback()
		}
	}

	login = () => {
		this.props.history.push('/login')
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
										message: '不能为空'
									}
								],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="请输入用户名"
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
										message: '不能为空'
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
							{getFieldDecorator('truepassword', {
								rules: [
									{
										validator: this.validator
									},
									{
										required: true,
										message: '不能为空'
									}
								],
							})(
								<Input
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="确认密码"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								注册
							</Button>
							<span onClick={this.login} className="span">已有账号，登录</span>
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}