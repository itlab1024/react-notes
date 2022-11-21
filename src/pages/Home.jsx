import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                home主页<br/>
                <Link to="/react">react页面</Link><br/>
            </div>
        );
    }
}

export default Home;