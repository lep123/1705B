import React from 'react'
import Loadable from 'react-loadable';
import { Spin, Icon } from 'antd';
const antIcon = <Icon type="loading" style={{ fontSize: 64 }} spin />;
const loadings = () => <div className="loadingBox">
    <div>
    <Spin indicator={antIcon} />
    <br/>
    <p>Loading...</p>
    </div>
</div>
export default (loader, loading = loadings) => {
    return Loadable({
        loader,
        loading
    })
}