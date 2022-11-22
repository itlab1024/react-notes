import React, {Component} from 'react';
import {Link, Outlet} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>此处是home页面，有如下两个路由链接</h1>
                <Link to="go">go语言</Link>
                <Link to="java">java语言</Link>
                <Outlet/>
            </div>
        );
    }
}
export default Home;