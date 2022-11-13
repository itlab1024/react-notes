// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class Component1 extends React.Component {
    state = {message: "初始化"}

    constructor(props) {
        super(props);
        console.log("构造函数执行")
    }

    render() {
        console.log("render执行")
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.unMountComponent}>卸载组件</button>
                <button onClick={this.changeMessage}>更新信息</button>
            </div>
        )
    }

    // 生命周期钩子函数：件挂载完毕调用
    componentDidMount() {
        console.log("组件挂载完毕后调用componentDidMount函数")
    }

    // 生命周期钩子函数：组件卸载之前调用
    componentWillUnmount() {
        console.log("组件卸载之前调用componentWillUnmount函数")
    }

    // 生命周期钩子函数：更新完成后调用
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("组件更新完成后调用componentDidUpdate函数")
    }

    // 自定义函数，卸载组件
    unMountComponent = () => {
        // 调用unmount方法卸载该组件
        root.unmount()
    }

    changeMessage = () => {
        this.setState({message: "更新后"})
    }
}

root.render(<Component1/>)