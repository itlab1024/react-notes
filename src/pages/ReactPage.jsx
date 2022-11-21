import React, {Component} from 'react';
import {Link, Outlet} from "react-router-dom";

class ReactPage extends Component {
    render() {
        return (
            <div>
                react页面（本页面有两个二级路由）<br/>
                <p>下面是两个链接，点击跳转到不同的路由</p>
                <Link to={"/react/cn"}>中文文档</Link><br/>
                <Link to={"/react/en"}>英文文档</Link>
                <p>路由切换后的组件将展示到下面</p>
                <div>
                    <Outlet/>
                </div>
            </div>
        );
    }
}

export default ReactPage;