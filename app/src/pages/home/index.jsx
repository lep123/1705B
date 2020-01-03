import React from 'react';
import './index.less';
import { Layout, Menu, Icon } from 'antd';
import {
	Switch,
	Route,
	Link
} from "react-router-dom";
import Echats from '@/pages/echats'
import Add from '@/pages/add'
import List from '@/pages/list'
import Posi from '@/pages/position'

const { Header, Sider, Content } = Layout;

export default class extends React.Component {
	state = {
		collapsed: false,
		dis: ['1']
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		const a = this.props.location.pathname
		let dis = ['1']
		switch (a) {
			case '/':
				dis = ['1']
				break;
			case '/echats':
				dis = ['2']
				break;
			case '/add':
				dis = ['3']
				break;
			default:
				dis = ['1']
				break;
		}
		return (
			<div id="box">
				<Posi />
				<Layout>
					<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
						<div className="logo" />
						<Menu theme="dark" mode="inline" defaultSelectedKeys={dis}>
							<Menu.Item key="1">
								<Link to="/">
									<Icon type="user" />
									<span>
										列表
								</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="2">
								<Link to="/echats">
									<Icon type="video-camera" />
									<span>
										echats
									</span>
								</Link>
							</Menu.Item>
							<Menu.Item key="3">
								<Link to="/add">
									<Icon type="upload" />
									<span>
										添加
									</span>
								</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
						</Header>
						<Content
							style={{
								margin: '24px 16px',
								padding: 24,
								background: '#fff',
								minHeight: 280,
							}}
						>
							{/* 二级路由 */}
							<Switch>
								<Route path="/echats" component={Echats} />
								<Route path="/add" component={Add} />
								<Route path="/" component={List} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}