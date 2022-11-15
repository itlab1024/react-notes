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

    // 生命周期钩子函数：更新前调用，有返回值，如果返回false，则不会更新。
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("组件更新前调用shouldComponentUpdate函数，返回true则继续更新，否则不更新。")
        return true
    }

    // 该函数会在render之前被调用，getDerivedStateFromProps 的存在只有一个目的：让组件在 props 变化时更新 state。
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps被调用")
        console.log("getDerivedStateFromProps被调用,props是", props)
        console.log("getDerivedStateFromProps被调用,state是", state)
        // 这里可以修改state
        return state
    }
    //getSnapshotBeforeUpdate()在最近渲染的输出被提交到例如 DOM 之前被调用。它使组件能够在可能发生更改之前从 DOM 捕获一些信息（例如滚动位置）。此生命周期方法返回的任何值都将作为参数传递给componentDidUpdate().
    // 这种用例并不常见，但它可能出现在 UI 中，例如需要以特殊方式处理滚动位置的聊天线程。

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate被调用")
        console.log("getSnapshotBeforeUpdate被调用,prevProps=", prevProps)
        console.log("getSnapshotBeforeUpdate被调用,prevState=", prevState)
        return null
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