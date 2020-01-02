import React from 'react';
import './styles.less';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { post } from '@/utils/request'
import qs from 'qs'
import {connect} from 'react-redux'

export default @connect(state => {

}, {
	// get = (option) => {
		
	// }
})
@Form.create({ name: 'normal_login' })
class extends React.Component {

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if(values.password === values.truepassword){
					
				}else{
					message.info('确认密码输入错误')
				}
				// const obj = {
				// 	username : values.username,
				// 	pwd : values.password
				// }
				// post('api/index.php/home/v1/register',qs.stringify(obj)).then(res => {
				// 	console.log(res)
				// })
			}
		});
	};


	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="box">
				<div className="login_body">
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '不能为空' }],
							})(
								<Input
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="请输入用户名"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '不能为空' }],
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
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}