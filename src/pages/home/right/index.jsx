import React , {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Breadcrumb } from 'antd';
import Index1 from './index1'
import Index2 from './index2'
import Index3 from './index3'
import Index4 from './index4'
import Index5 from './index5'
import Index6 from './index6'

export default class Right extends Component {

    render() {
        return (
            <div className="home-right">
                <div className="right-top">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">index1</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/index2">index2</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                         <Link to="/index3">index3</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                         <Link to="/index4">index4</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                         <Link to="/index5">index5</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                         <Link to="/index6">index6</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                </div>

                <div className="right-section">
                    <Switch>
                        <Route path='/index2' component={Index2} />
                        <Route path='/index3' component={Index3} />
                        <Route path='/index4' component={Index4} />
                        <Route path='/index5' component={Index5} />
                        <Route path='/index6' component={Index6} />
                        <Route path='/' component={Index1} />
                    </Switch>
                </div>
            </div>
        )
    }
    
}