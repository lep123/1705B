import React from 'react';
import './index.less'
import {
	Form,
	Icon, Input, Button, Checkbox,
	Upload, message
} from 'antd';
const { TextArea } = Input;
export default
@Form.create({
	name: 'global_state',
	onFieldsChange(props, changedFields) {

	},
	mapPropsToFields(props) {

	},
	onValuesChange(_, values) {

	},
})
class extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	}
	render() {
		const props = {
			name: 'file',
			action: 'http://49.235.147.95:3001/api/banner/update',
			headers: {
				authorization: 'authorization-text',
			}
		}
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="add">
				<div className="title">
					添加
				</div>
				<div className="AddFlexBox">
					<div className="addRowbox">
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item label="NAME" className="insideForm">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: 'Please input your username!' }],
								})(
									<Input
										prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="姓名"
									/>,
								)}
							</Form.Item>
							<Form.Item label="TITAGELE" className="insideForm">
								{getFieldDecorator('age', {
									rules: [{ required: true, message: 'Please input your username!' }],
								})(
									<Input
										prefix={<Icon type="pass" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="年龄"
									/>,
								)}
							</Form.Item>
							<Form.Item label="DATE" className="dataBoxSex">
								{getFieldDecorator('username', {
									rules: [{ required: true, message: 'Please input your username!' }],
								})(
									<Input
										prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="Username"
									/>,
								)}
							</Form.Item>
							<div className="imgBox">
								<p> <label style={{color:"red"}}>*</label> 上传</p>
								<Upload {...props}>
									<Button>
										<Icon type="upload" /> Click to Upload
    </Button>
								</Upload>
							</div>
							<Form.Item label="留言板" className="liuyan">
								{getFieldDecorator('gender', {
									rules: [{ required: true, message: 'Please input your username!' }],
								})(
									<TextArea rows={4} />,
								)}
							</Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								添加
          </Button>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}