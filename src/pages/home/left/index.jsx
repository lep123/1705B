import React , {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
export default class Left extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
        } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
        }
    };

    render() {
        return (
            <div className="home-left">
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 200 }}
                >
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="mail" />
                        <span>增删改查</span>
                        </span>
                    }
                    >
                        <Menu.Item key="1"><Link to='/'>增删改查</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/index2'>Option 2</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="appstore" />
                        <span>下拉加载</span>
                        </span>
                    }
                    >
                        <Menu.Item key="3"><Link to='/index3'>下拉加载</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/index4'>Option 4</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub3"
                    title={
                        <span>
                        <Icon type="setting" />
                        <span>分页</span>
                        </span>
                    }
                    >
                        <Menu.Item key="5"><Link to='/index5'>分页</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/index6'>Option 6</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
    
}