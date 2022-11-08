// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 定义Clock组件
class Clock extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 该方法用于设置状态，特别注意要使用setState方法，而不是使用this.state = {}的方式。
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // 创建一个定时器
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    // 销毁定时器
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    // 渲染
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

root.render(<Clock/>);