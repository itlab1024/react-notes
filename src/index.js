import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// root的元素是index.html中的<div id="root"></div>
const root = document.getElementById("root");

// 使用class的方式定义组件
class Component1 extends React.Component {
    // 构造方法
    constructor(props) {
        super(props);
        this.state = {name: "刘备"}
    }

    // render是不能忽略的，写入自己的JSX代码
    render() {
        return (
            <div>
                <h1>组件1{this.state.name}</h1>
            </div>
        )
    }

}

ReactDOM.render(<Component1 onClick = "changeName()"/>, root)