import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class Component1 extends React.Component {
    // 使用api的方式创建一个ref
    myRef = React.createRef();

    clickFunc = () => {
        console.log(this)
    }
    updateFunc = () => {
        this.setState({"btnMsg" : "点过了"})
    }
    nameCallback = (ele) => {
        this.name = ele;
        console.log("input函数被调用")
    }
    state = {btnMsg : "点我"}
    render() {
        return (
            <div>
                <input ref={this.nameCallback}/><br/>
                <input ref={ele => {this.age = ele}}/><br/>
                <button onClick={this.clickFunc}>{this.state.btnMsg}</button>
                <button onClick={this.updateFunc}>更新组件</button>
            </div>
        )
    }
}

root.render(<Component1/>)