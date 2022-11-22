import React from 'react';
import root from "./index";
// 类式组件实现方式
// class App extends Component {
//     state = {count: 0}
//
//     render() {
//         return (
//             <div>
//                 <h1>结果是:{this.state.count}</h1>
//                 <button onClick={this.addOne}>加一</button>
//             </div>
//         )
//     }
//
//     addOne = () => {
//         this.setState({count: this.state.count + 1})
//     }
// }

// 函数式组件实现方式，使用Hooks
const App = () => {
    // 使用React.useState hook
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("武松");
    // 有两个参数，第一个是钩子函数，第二个是监听数组，数组是状态数据
    React.useEffect(() => {
        console.log("钩子函数被执行")
        // return这个函数就类似类式组件中的componentWillUnmount钩子。
        return () => {
            console.log("组件卸载前执行")
        }
    }, [count])

    function addOne() {
        setCount(count + 1)
    }

    function changeName() {
        setName("林冲")
    }

    // 卸载组件
    function unmount() {
        root.unmount()
    }

    return (
        <div>
            <h1>结果是:{count}----{name}</h1>
            <button onClick={addOne}>加一</button>
            <br/>
            <button onClick={changeName}>改名</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}

export default App;