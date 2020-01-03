import React from 'react';
import './index.less'
import {
	Form,
	Icon, Input, Button,
	Upload, message
} from 'antd';
import { add } from "@/services/"
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
				values.gender="000"
				add(values).then(res=>{
					console.log(res)
				})
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
	normFile = e => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};
	render() {
		const props = {
			name: 'file',
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
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
							<Form.Item label="Name" className="insideForm">
								{getFieldDecorator('name', {
									rules: [{ required: true, message: '不可为空！' }],
								})(
									<Input
										prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="username"
									/>,
								)}
							</Form.Item>
							<Form.Item label="Age" className="insideForm">
								{getFieldDecorator('age', {
									rules: [{ required: true, message: '不可为空！' }],
								})(
									<Input
										prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder="age"
									/>,
								)}
							</Form.Item>
							<Form.Item label="Msg" className="dataBoxSex">
								{getFieldDecorator('msg', {
									rules: [{ required: true, message: '不可为空！' }],
								})(
									<Input
										prefix={<Icon type="like" style={{ color: 'rgba(0,0,0,.25)' }} />}
										placeholder=""
									/>,
								)}
							</Form.Item>
							<div className="imgBox">
								<Form.Item label="Upload" extra="">
									{getFieldDecorator('gender', {
										valuePropName: 'fileList',
										getValueFromEvent: this.normFile,
									})(
										<Upload {...props}>
											<Button>
												<Icon type="upload" /> Click to upload
              </Button>
										</Upload>,
									)}
								</Form.Item>
							</div>
							<Form.Item label="Description" className="liuyan">
								{getFieldDecorator('hospital', {
									rules: [{ required: true, message: '不可为空！' }],
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