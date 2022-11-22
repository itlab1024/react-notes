import React, {Component} from 'react';
import {Link, Outlet} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div>
                <h1>布局页面</h1>
                <Link to="/home">Home页</Link><br/>
                <Link to="/about">关于我们</Link>
                <hr/>
                {/*子路由展示下下方*/}
                <Outlet/>
            </div>
        );
    }
}

export default Layout;