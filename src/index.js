// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
function Component1() {
    return (
        <div>
            <h1>第一个组件</h1>
        </div>
    )
}

root.render(<Component1/>)