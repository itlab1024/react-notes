import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 编写第一个应用
// root的元素是index.html中的<div id="root"></div>
const root = document.getElementById("root");
const btn = <button>hello react</button>
ReactDOM.render(btn, root)