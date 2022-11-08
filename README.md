> React学习笔记

# 我为什么要学习react？

我是一个主写后端的开发工程师，曾经入行IT行业的时候也学过html、js、css等技术，后来也学过JQuery技术，但是并非我的主学方向。
这些年已经忘记的差不多了，后端是无法展现给用户的，当我写个博客的时候，一个小项目都无法有界面展示。重新区学习html、jss、css等
基础技术，我已经不愿意花大量时间去学习了。所以就像学一些框架，搭配合适的UI就能够呈现出来界面。以满足我现在不大不小的需求。

# 目的

本文章的目的，并非教程，知识记录下我的学习。我不会去探索底层原理，只要会用即可。这就是我的目标。我会把学习记录分享出来，并非
要教学，在前端方面我也没有教人的资本。不过三人行必有我师，我的学习笔记没准就会在无形中帮助一些人。所以会分享出来。希望码友沟通交流，
共同进步。

# 什么是React？

[React](https://react.docschina.org/)是用于构建用户界面的 JavaScript 库。
很高兴有中文文档，这对于英语能力不强的人来说是非常友好的，我学习的途径主要是官网。

> 啪啪啪打脸：学了一天后发现中英文翻译还是有问题的，我用的版本是v18.2.0，比如root.render已经不用了，而是使用createRoot，但是中文官方并没有更新，所以我还是建议直接去看英文网站（搭配谷歌翻译、或者搭配中文网，但是以英文网站为主，没办法，文档中之前过时的用法，修改一遍）**
> 我是学习新东西，而且工作中也不用，就尽可能学习新的版本的东西，旧版本就不考虑了**


# 初识

官方提供了一个开始的样例，但是因为网络问题我没有打开，入门教程推荐我们使用原生html中引入js，并使用react的库方法，我尝试了下。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
    // dom容器，需要将内容填充到该容器中，root是index.html中的id=root的div元素
    const domContainer  = document.getElementById("root");
    // 创建一个React的Dom
    const root = ReactDOM.createRoot(domContainer );
    // 这是一个JSX语法
    const btn = <button>hello react</button>
    // 使用render渲染
    root.render(btn)
</script>
<script crossorigin src="js/react.development.js"></script>
<script crossorigin src="js/react-dom.development.js"></script>
<script src="js/babel.min.js"></script>
<!--<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>-->
<!--<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>-->
<!--<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>-->
</body>
</html>
```

官方为我们提供了cdn的js，但是访问还是很慢，我就将其下载放到本地。需要引入上面三个js才能正常运行。
以react开头的js是react的库，babel是一个将JSX语法，编译为原生js的工具。
运行：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211071724296.png)

# 脚手架

在html代码中直接引入js虽然很方便，但是不好管理，官方推荐使用react脚手架。
要求：电脑需要安装Node >= 8.10 和 npm >= 5.6。去[nodejs中文网](http://www.nodejs.com.cn/)官网下载安装即可。
然后使用`npx create-react-app 项目名`创建react项目。

安装脚手架：

```shell
#npm安装有点慢，所以我设置了代理使用cnpm
PS E:\github> npm install cnpm -g --registry=https://registry.npm.taobao.org
npm WARN deprecated @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs

added 359 packages in 19s

11 packages are looking for funding
  run `npm fund` for details
# 安装脚手架
PS E:\github> cnpm install -g create-react-app
Downloading create-react-app to C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app_tmp
Copying C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app_tmp\_create-react-app@5.0.1@create-react-app to C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app
Installing create-react-app's dependencies to C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app/node_modules
[1/11] commander@^4.1.1 installed at node_modules\_commander@4.1.1@commander
[2/11] envinfo@^7.8.1 installed at node_modules\_envinfo@7.8.1@envinfo
[3/11] validate-npm-package-name@^3.0.0 installed at node_modules\_validate-npm-package-name@3.0.0@validate-npm-package-name
[4/11] cross-spawn@^7.0.3 installed at node_modules\_cross-spawn@7.0.3@cross-spawn
[5/11] prompts@^2.4.2 installed at node_modules\_prompts@2.4.2@prompts
[6/11] fs-extra@^10.0.0 installed at node_modules\_fs-extra@10.1.0@fs-extra
[7/11] tmp@^0.2.1 installed at node_modules\_tmp@0.2.1@tmp
[8/11] semver@^7.3.5 installed at node_modules\_semver@7.3.8@semver
[9/11] chalk@^4.1.2 installed at node_modules\_chalk@4.1.2@chalk
[10/11] hyperquest@^2.1.3 installed at node_modules\_hyperquest@2.1.3@hyperquest
[11/11] tar-pack@^3.4.1 installed at node_modules\_tar-pack@3.4.1@tar-pack
deprecate tar-pack@3.4.1 › tar@^2.2.1 This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
All packages installed (66 packages installed from npm registry, used 1s(network 1s), speed 844.85KB/s, json 61(341.28KB), tarball 705.49KB, manifests cache hit 0, etag hit 0 / miss 0)
[create-react-app@5.0.1] link C:\Users\Administrator\AppData\Roaming\npm\create-react-app@ -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app\index.js
# 创建项目
PS E:\github> create-react-app react-notes

Creating a new React app in E:\github\react-notes.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1393 packages in 7m

Installing template dependencies using npm...

added 72 packages in 10s
Removing template package using npm...


removed 1 package in 5s

Success! Created react-notes at E:\github\react-notes
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-notes
  npm start

You had a `README.md` file, we renamed it to `README.old.md`
```
项目结构
```text
react-notes
|-- README.md # 说明文件
|-- node_modules # 依赖目录
|-- package-lock.json #锁定版本号，保证团队开发依赖一致
|-- package.json # 依赖以及版本说明
|-- public # 静态公共目录
|-- src # 源文件，开发的时候就在该目录编码
```
启动项目并访问（访问地址在控制台能看到）：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211071758898.png)
react脚手架会给我们在src中生成很多文件，这些文件可以删掉（不删除也是可以的，为了学习方便删掉了）。
然后重新创建index.css和index.js文件。
接下来在index.js中引入react依赖
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
```
# 开发工具
我选择[WebStorm](https://www.jetbrains.com/webstorm/)，jetbrains的精品工具。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211071813964.png)
# 第一个应用
**之后的应用代码除特别说明，都是写在index.js中**
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// dom容器，需要将内容填充到该容器中，root是index.html中的id=root的div元素
const domContainer  = document.getElementById("root");
// 创建一个React的Dom
const root = ReactDOM.createRoot(domContainer );
// 这是一个JSX语法
const btn = <button>hello react</button>
// 使用render渲染
root.render(btn)
```
界面显示如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211071820296.png)
**说明**：
* import是导入资源，这和java类似。
* domContainer是一个id=root的div元素，react需要指定一个容器（就是这个root），将其他html元素放入该容器中。
* root是React创建的虚拟DOM对象
* const btn = <button>hello react</button> 的语法很奇怪，他是一个JSX语法。
* root.render(<button>hello react</button>)是react的渲染方法，参数是元素内容。
# JSX简介
## 什么是JSX？
```jsx
const element = <h1>Hello, world!</h1>;
```
上面的代码就是一个JSX，一个javascript的语法扩展，他既不是字符串也不是HTML。
## JSX的好处
react是将元素动态渲染到页面，那么这些元素就会有层级关系。如果使用js，则代码中各种document.XX方法，繁琐不说，也无法正确的看出元素的层级结构等信息。
JSX就解决了这个问题。
## JSX中的表达式
```jsx
const element = <h1>Hello, world!</h1>;
```
代码中h1内元素内容是静态，JSX支持放入表达式来实现内容替换，使用{表达式}的方式。
```jsx
const sayHello = "Hello, world!"
const element = <h1>{sayHello}</h1>;
```
也可以在{}中使用函数，比如
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
// 定义一个js函数
function appendMsg(msg) {
    return msg + " I am learning react";
}
const sayHello = "Hello, world!"
// 在JSX中使用appengMsg方法处理sayHello，并放入h1标签中。
const btn = <h1>{appendMsg(sayHello)}</h1>;
root.render(btn, root)
```
运行结果如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072058040.png)
## JSX多级元素
多级元素使用括号括起来
```jsx
const btn = (
    <div>
        <h1>hello world!</h1>
    </div>
)
```
# 组件
组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。
## 创建组件
创建组件有两种方式，一种是使用js函数的方式，一种是使用ES6的class方式。
### js类组件
```javascript
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
```
render的第一个参数要使用标签方式<Component1/>，必须是关闭标签，也可以使用<Component1></Component1>，为了简洁就可以使用前者的简写方式。

页面展示：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072119575.png)
该种方式能很好的定义一个组件，但是更推荐使用ES6 Class的方式。
### class类组件
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用class的方式定义组件
class Component1 extends React.Component {
    // render是不能忽略的，写入自己的JSX代码
    render() {
        return (
            <div>
                <h1>第一个组件</h1>
            </div>
        )
    }
}

root.render(<Component1/>, root)
```
页面效果跟js定义组件的一样。
## 渲染组件
当组件使用户自定义的组件的时候，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。
### JS类组件
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
function Component1(props) {
    return (
        <div>
            <h1>第一个组件{props.name}</h1>
        </div>
    )
}

root.render(<Component1 name = "one"/>, root)
```
解析：<Component1 name = "one"/>传递了一个属性name，值是one，该值传递给里js函数组件的props，JSX中通过props.name获取到了值。

界面展示
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072135037.png)
## class类组件
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用class的方式定义组件
class Component1 extends React.Component {
    // render是不能忽略的，写入自己的JSX代码
    render() {
        return (
            <div>
                <h1>第一个组件{this.props.name}</h1>
            </div>
        )
    }
}

root.render(<Component1 name = "one"/>, root)
```
解释：class组件类似js组件，不过获取属性的时候使用的是this.props.name。
## 组合组件
组件可以互相组合
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用class的方式定义组件
class Component1 extends React.Component {
    // render是不能忽略的，写入自己的JSX代码
    render() {
        return (
            <div>
                <h1>组件1{this.props.name}</h1>
                <Component2/>
            </div>
        )
    }
}
class Component2 extends React.Component {
    render() {
        return <h1>组件2</h1>
    }
}

root.render(<Component1/>, root)
```
上面的例子中，Component1中就嵌套了组件Component2
界面显示如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072201394.png)
# State&生命周期
## 什么是state？
state类似于props，但是state是私有的，完全被当前组件自身控制。
用户可以在state中设置自己的属性，可以通过属性来控制不同的行为。
## 定义state属性
可以通过构造函数定义state中的属性
```javascript
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

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

root.render(<Component1/>, root)
```
解释：constructor(props) 是构造函数的定义，需要注意的时候，super(props)不能被省略（必须是函数体的第一行有效代码（放到第一行））
this.state = {name: "刘备"}，就是初始化的时候给组件state增加一个属性name，并且初始值="刘备"
页面显示如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072214326.png)
## 更改state值

