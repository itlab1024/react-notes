import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import PubSub from 'pubsub-js'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

class Header extends React.Component {
    // 按钮点击时间
    clickFunc = (x) => {
        return (event) => {
            // 调用父组件传递过来的函数，将字符串x="Header"传递给该函数
            this.props.getHeaderName(x)
        }
    }

    render() {
        return (
            <div>
                头部组件
                <h1>接收父组件参数:{this.props.parentComponentName}</h1>
                <button onClick={this.clickFunc('Header')}>点击我将Header字符串传递给父组件</button>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return <div>内容组件
            <button onClick={this.sendToFooter}>点我将参数传递给兄弟组件Footer</button>
        </div>
    }

    sendToFooter = () => {
        // 发布消息
        PubSub.publish('topic1', `ContentComponent`)
    }
}

class Footer extends React.Component {
    state = {"contentName": ""}

    // 在钩子函数中订阅消息
    componentDidMount() {
        // 订阅消息
        PubSub.subscribe('topic1', (msg, data) => {
            this.setState({
                contentName: data
            })
        })
    }

    render() {
        return <div>底部组件，接收兄弟组件Content传递过来的参数:{this.state.contentName}</div>
    }
}

class CombinedComponent extends React.Component {
    // 父组件中定义函数供子组件回调使用
    getHeaderName = (name) => {
        console.log("父组件，打印Header组件传递过来的值", name)
    }

    render() {
        return (
            <div>
                <Header parentComponentName="Combined" getHeaderName={this.getHeaderName}/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

root.render(
    <React.StrictMode>
        <CombinedComponent/>
    </React.StrictMode>
)