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
很高兴有中文文档，这对于英语能力不强的人来说是非常友好的，需要注意的是，中文网会有翻译不正确的时候，最好对比中英两种语言。我学习的途径主要是官网、尚硅谷。

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
    const domContainer = document.getElementById("root");
    // 创建一个React的Dom
    const root = ReactDOM.createRoot(domContainer);
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
[create-react-app@5.0.1] link C:\Users\Administrator\AppData\Roaming\npm\create-react-app@ -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\create-react-app\index.jsx
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
const domContainer = document.getElementById("root");
// 创建一个React的Dom
const root = ReactDOM.createRoot(domContainer);
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

```jsxx
const element = <h1>Hello, world!</h1>;
```

上面的代码就是一个JSX，一个javascript的语法扩展，他既不是字符串也不是HTML。

## JSX的好处

react是将元素动态渲染到页面，那么这些元素就会有层级关系。如果使用js，则代码中各种document.XX方法，繁琐不说，也无法正确的看出元素的层级结构等信息。
JSX就解决了这个问题。

## JSX中的表达式

```jsxx
const element = <h1>Hello, world!</h1>;
```

代码中h1内元素内容是静态，JSX支持放入表达式来实现内容替换，使用{表达式}的方式。

```jsxx
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
root.render(btn)
```

运行结果如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072058040.png)

## JSX多级元素

多级元素使用括号括起来

```jsxx
const btn = (
    <div>
        <h1>hello world!</h1>
    </div>
)
```

# 组件和props

组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

## 创建组件

创建组件有两种方式，一种是使用js函数的方式，一种是使用ES6的class方式。

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

root.render(<Component1/>)
```

页面效果跟js定义组件的一样。

## 渲染组件

当组件使用户自定义的组件的时候，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为
“props”。

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

root.render(<Component1 name="one"/>)
```

解析：<Component1 name = "one"/>传递了一个属性name，值是one，该值传递给里js函数组件的props，JSX中通过props.name获取到了值。

界面展示
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072135037.png)

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
                <h1>第一个组件{this.props.name}</h1>
            </div>
        )
    }
}

root.render(<Component1 name="one"/>)
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

root.render(<Component1/>)
```

上面的例子中，Component1中就嵌套了组件Component2
界面显示如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072201394.png)

## 批量参数

首先看一个普通的参数传递

```jsxx
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
    const {name, age} = props
    return (
        <div>
            <h1>姓名：{name}</h1>
            <h1>年龄：{age}</h1>
        </div>
    )
}
root.render(<Component1 name="one" age="12"/>)
```

上面是没有问题的，但是如果有很多参数，就有些麻烦了。

怎么做呢，可以将很多参数封装到一个对象中。

```jsxx
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
    const {name, age} = props
    return (
        <div>
            <h1>姓名：{name}</h1>
            <h1>年龄：{age}</h1>
        </div>
    )
}
// 定义一个对象，通过{...p将该对象传递}
const p = {name: "刘备", age: 33}
root.render(<Component1 {...p}/>)
```

# React Tools

React为我们提供了一个调试工具。可以在浏览器的扩展商店中下载安装
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211082048829.png)
点进去，安装即可
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211082050005.png)
访问react项目，打开浏览器控制台，就能找到react的component等界面。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211082055564.png)
点击component就能够看到props等信息
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211082057363.png)

# State

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

root.render(<Component1/>)
```

解释：constructor(props) 是构造函数的定义，需要注意的是，super(props)不能被省略（必须是函数体的第一行有效代码（放到第一行））
this.state = {name: "刘备"}，就是初始化的时候给组件state增加一个属性name，并且初始值="刘备"
页面显示如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211072214326.png)

# state简化设置

上面的state可以放到构造器中，但是也有更简单的方法，就是放到外面使用state = {}的方式设置

```jsxx
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

    // state的简化设置方法
    state = {name: "刘备"}

    // render是不能忽略的，写入自己的JSX代码
    render() {
        return (
            <div>
                <h1>组件1{this.state.name}</h1>
            </div>
        )
    }
}

root.render(<Component1/>)
```

可以看到，我将构造函数去掉了，使用`state = {name: "刘备"}`方法设置了state。

## 更改state值

这里我使用官网Clock的例子（时钟，每秒自动更新）

```javascript
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
```

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211082210985.png)
解释：在Clock里，定义了构造函数，在构造函数里设置了state里的值`this.state = {date: new Date()};`
其中key是date，value是`new Date()`
在render方法中，获取了state中的date值。
**那么如何更改时间呢？**
需要个定时器，并且当组件销毁的时候还需要将定时器销毁，react提供了很多钩子方法。在这里可以使用两个

* componentDidMount：该函数在组件被渲染到DOM之后执行。
* componentWillUnmount该函数在组件卸载之后执行。
  那么就可以在componentDidMount中启动要给定时器。
  在componentWillUnmount中销毁定时器

```javascript
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
```

此时页面的时间就会每秒刷新一次。

## state 注意事项

* 除了构造方法中使用`this.state={}`设置state外，其他地方设置state，使用`this.setState({})`。
* state内的值是合并的，更新其中一个值不会影响其他值。

# 组件生命周期

组件从创建（挂载）到销毁（卸载），由生到死的的整个过程就是组件的生命周期。在整个生命周期中会调用内置的钩子函数。

## 常用钩子函数

常用生命周期图如下：

![image-20221113210333392](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211132103451.png)

接下来试试各种生命周期钩子函数的使用。

```

```

当打开页面什么也不再操作的时候，日志如图

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211132117105.png)

先执行了构造函数，然后执行render函数挂载页面，挂载完毕后执行了钩子函数componentDidMount。

接下来点击更改消息按钮。

![image-20221113211816707](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211132118756.png)

请注意红色区域，左侧信息已经更新成功，右侧是日志，重新掉了用render进行页面的渲染。渲染完毕之后调用了componentDidUpdate函数。

接下来点击卸载组件

![image-20221113211943169](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211132119236.png)

左侧页面空白了，因为组件被卸载了，右侧日志红色区域，说明组件卸载前调用了钩子函数componentWillUnmount。

# 不常用钩子函数

常用的也有不常用的，那么就看下所有生命周期。除了下main三个绿色是常用的，上面的三个getDevicedStateFromProps、shouldComponentUpdate、getSnapshotBeforeUpdate是不常用的函数。

![image-20221113210447206](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211132104307.png)

使用代码验证

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
```

打开页面，第一次进入页面可以看到如下日志：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211151430830.png)
再点击更新后，展示下图中红色区域的日志
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211151431671.png)

# 事件处理（Event）

事件就是点击、鼠标滑动等动作。react的组件中支持事件操作。

## 原生事件

比如在原生html中可以给按钮定义点击事件

```html

<button onclick="activateLasers()">
    Activate Lasers
</button>
```

打开页面，点击按钮效果如下：

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211112124607.png)

## React中的事件

在react中也可以以类似的方式使用，不过在react中事件的名字是驼峰命名，并且等号后面要使用`{this.这里是事件名}`
，特别注意，不需要用双引号括起来。

```jsxx
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 定义Clock组件
class IButton extends React.Component {
    // 渲染
    render() {
        return (
            <button onClick={this.clickBtn}>戳我</button>
        );
    }
    clickBtn() {
        alert("按钮被点击了")
    }
}

root.render(<IButton/>);
```

上面的例子，功能跟原生示例一样，特别需要注意`<button onClick={this.clickBtn}>戳我</button>`。

## 事件的默认行为

在原生html中可以使用return false来阻止事件的默认行为

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>原生html阻止表单提交事件</title>
</head>
<body>
<form action="https://itlab1024.com">
    <button type="submit" onclick="alert('我被点击了');return false">戳我</button>
</form>
</body>
</html>
```

如果没有return false代码，表单会被提交到https://itlab1024.com，加了这个就会阻止默认的事件。

但是在react中就不能这样做，如何做呢？看如下代码：

```jsxx
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 定义Clock组件
class IButton extends React.Component {
    // 渲染
    render() {
        return (
            <form action="https://itlab1024.com">
                <button type="submit" onClick={this.clickBtn}>戳我</button>
            </form>
        );
    }
    clickBtn(e) {
        // 阻止默认事件
        e.preventDefault()
    }
}

root.render(<IButton/>);
```

# 条件渲染

我们可以通过给组件传递参数，组件内部通过参数判断动态使用组件进行渲染。举个例子，传递一个参数，isTeacher，如果是true就展示`老师`
，否则展示`学生`

```jsxx
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 定义Teacher组件
class Teacher extends React.Component {
    // 渲染
    render() {
        return (
           <div>老师</div>
        );
    }
}

// 定义Student组件
class Student extends React.Component {
    // 渲染
    render() {
        return (
            <div>学生</div>
        );
    }
}

// 复杂组件，传递参数，动态渲染
class Complex extends React.Component{
    isTeacher = this.props.isTeacher;
    render() {
        if (this.isTeacher) {
            return (<Teacher/>)
        }
        return <Student/>
    }
}

root.render(<Complex isTeacher = {false}/>);
```

上面的代码，我定义了三个类式组件，Teacher、Student和Complex，其中Complex中我从props中接收参数，参数是通过`<Complex isTeacher = {false}/>`
传递的，可以更改他的值，就可以看到，动态渲染出来了学生和老师的组件。

## 元素变量

react支持使用变量来存储元素，这样就能动态的渲染部分组件。

```jsxx
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 定义登录组件
class Login extends React.Component {
    onClick = this.props.onClick

    // 渲染
    render() {
        return (
            <button onClick={this.onClick}>登录</button>
        );
    }
}

// 定义登出组件
class Logout extends React.Component {
    // 渲染
    onClick = this.props.onClick

    // 渲染
    render() {
        return (
            <button onClick={this.onClick}>登出</button>
        );
    }
}

// 登录控制器
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    loginClickFunc = () => {
        this.setState({isLoggedIn: true});
    }

    logoutClickFunc = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <Logout onClick={this.logoutClickFunc}/>;
        } else {
            button = <Login onClick={this.loginClickFunc}/>;
        }
        return (
            <div>
                {button}
            </div>
        );
    }
}

root.render(<LoginControl/>);
```

使用` let button;`定义一个变量，通过条件设置不同的元素。通过点击事件进行了更改。

**特别说明**：对于组件中的点击事件(`onClick={this.logoutClickFunc}`)
，logoutClickFunc函数一定要使用箭头方式定义，就比如上面的：` loginClickFunc = () => {}`，否则提示this有问题。

![image-20221112143755518](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211121437660.png)

对于this问题，我看官方文档的是定义一个变量接收函数，比如：

![image-20221112143854046](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211121438118.png)

其实不用这么麻烦，使用箭头函数定义即可。

## 内联IF函数与&&符

就是说if条件可以和JSX代码通过&&合并

比如

```jsxx
class Login extends React.Component {
    // 渲染
    render() {
        if(this.props.isLoggedIn) {
            return <div>登录中</div>
        }
    }
}
```

就可以修改为：

```jsxx
class Login extends React.Component {
    // 渲染
    render() {
        return (<div>
            {
                this.props.isLoggedIn && <div>登录中</div>
            }
        </div>)
    }
}
```

## 三目表达式

```jsxx
class Login extends React.Component {
    // 渲染
    render() {
        return (<div>
            {
                this.props.isLoggedIn ? <div>已登录中</div> : <div>未登录</div>
            }
        </div>)
    }
}
```

## 防止组件渲染

在极少数情况下，您可能希望组件隐藏自己，即使它是由另一个组件呈现的。为此返回`null`
而不是其渲染输出。虽然不渲染，但是生命周期钩子函数还是会被出发的，比如`componentDidUpdate`.

# 列表和Keys

列表渲染，主要问题是如何通过数组数据转化为html标签，比如一个数组[1, 2, 3, 4]，需要将其使用<ul><li></li></ul>来展示。

```
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"

// root的元素是index.html中的<div id="root"></div>
class ListComponent extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4];
        const listItems = numbers.map((number) =>
            <li>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        )

    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListComponent/>);
```

![image-20221112153845309](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211121538341.png)

虽然能够显示出来，但是控制台提示了一个错误

![image-20221112154101142](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211121541177.png)

意思是每个子元素应该有一个唯一的key属性。

可以给<li>标签增加一个key属性：

```jsxx
 <li key={number.toString()}>{number}</li>
```

警告消失了，但是不明白这个key有啥用。

## Key说明

键帮助 React 识别哪些条目(item,上面的li标签)已更改、添加或删除。应为数组内的元素提供键，以使元素具有稳定的标识。

选择键的最佳方法是使用一个字符串，该字符串在其兄弟项中唯一标识一个列表项。大多数情况下，使用数据中的 ID 作为键，就像上面我的做法那样。

如果没有稳定的条目ID，可以使用index，如果有稳定的标记就是用它（比如后端数据返回的主键ID）

```jsxx
const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);
```

但是如果item顺序可能发生变化，就不推荐使用index，这会对性能产生负面影响，并可能导致组件状态出现问题。

key在兄弟节点中唯一。

## 提取组件

```jsxx
// 引入react相关依赖
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"

// 该组件就返回一个<li></li>
class LiComponent extends React.Component {
    render() {
        return (
        	// 这里无需指定key
            <li>{this.props.num}</li>
        )
    }

}

class UlComponent extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4]
        const listItems = numbers.map((number) =>
        	// 这里需要指定key
            <LiComponent num={number} key={number.toString()}/>
        )
        return <ul> {listItems}</ul>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UlComponent/>);
```

运行结果如下：

![image-20221112201929843](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211122019896.png)

# 表单

表单主要分为非受控组件和受控组件。

## 受控组件

由 React 控制其值的输入表单元素称为“受控组件”。也就是说表单的值通过react中的state控制。
在大多数情况下，我们建议使用受控组件来实现表单。在受控组件中，表单数据由 React 组件处理。

```jsxx
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
    // 初始化state
    state = {
        // 保存输入框username的值
        "username": ""
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <input name="username" value={this.state.username} type={"text"} onChange={this.handlerChange}/>
                <button type={"submit"}>提交</button>
            </form>
        )
    }

    // 处理提交
    handlerSubmit = (e) => {
        // 阻止表单的默认提交事件
        e.preventDefault()
        // 打印用户输入的username的值
        console.log("username", this.state.username)
    }
    // username输出框change事件
    handlerChange = (e) => {
        // 将输输入框的值，维护到state中
        this.setState({"username": e.target.value})
    }
}
root.render(<Component1/>)
```

上面的代码能够实现功能，当输入用户名密码的时候，能够看到state中username和password的变化。

![image-20221113183100595](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211131831649.png)

这就是受控组件。

上面的代码还是可以优化的，比如onchange的方法内容就很相似，那么可以通过使用一个onchange方法，传递不同的参数来解决。

```jsxx
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
    // 初始化state
    state = {
        // 初始化输入框username的值
        "username": '',
        // 初始化输入框password的值
        "password": ''
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <label>用户名：</label>
                <input name="username" value={this.state.username} type={"text"} onChange={this.handlerChange('username')}/>
                <label>密码：</label><input name="password" value={this.state.password} type={"text"} onChange={this.handlerChange('password')}/>
                <button type={"submit"}>提交</button>
            </form>
        )
    }

    // 处理提交
    handlerSubmit = (e) => {
        // 阻止表单的默认提交事件
        e.preventDefault()
    }

    // 统一处理change
    handlerChange = (dataType) => {
        return (e) => {
            // 将输输入框的值，维护到state中，这里必须使用[dataType]，否则他会创建key=dataType，而不是使用传递进来的参数
            this.setState({[dataType]: e.target.value})
        }
    }
}

root.render(<Component1/>)
```

不过我依然觉得挺麻烦，看到官网推荐了一个https://formik.org/来解决react中的form问题，之后用到学习下。

## 非受控组件

另一种方法是不受控制的组件，其中表单数据由 DOM 本身处理。
表单元素自己维护 state。可以使用 ref 获取表单数据，比如文件选择组件就是一个非受控组件。

# Refs和DOM

Refs 提供了一种访问 DOM 节点或在 render 方法中创建的 React 元素的方法。
通过在标签上使用ref属性来定义ref。ref的创建有多种形式，字符串形式、回调形式、createRef形式

## 字符串形式

字符串形式就是在标签中ref属性的值是一个字符串。
> 特别注意：字符串形式是遗留的，也就是过期的，未来会被删除。建议使用回调形式或者createRef API形式。

看如下示例：

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
class Component1 extends React.Component {

    clickFunc = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <input ref="name" name="name"/>
                <br/>
                <input ref="age" name="age"/>
                <br/>
                <button onClick={this.clickFunc}>点我</button>
            </div>
        )
    }
}

root.render(<Component1/>)
```

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211151926566.png)

## 回调形式

回调形式是说ref是一个回调函数，这个回调函数会接收到一个参数，该参数就是ref对应的元素，回调中通常会使用this.类属性名 =
接收到的参数。

```jsx
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

    clickFunc = () => {
        console.log(this)
    }

    render() {
        return (
            <div>
                <input ref={ele => {
                    this.name = ele
                }}/>
                <br/>
                <input ref={ele => {
                    this.age = ele
                }}/>
                <br/>
                <button onClick={this.clickFunc}>点我</button>
            </div>
        )
    }
}

root.render(<Component1/>)
```

`<input ref={ele => {this.name = ele}}/>` 中的ele就是回调的参数（该input自身），this.name=ele就是将当前元素给类实力中的name属性，
以后就可以通过this.name.xxx操作。比如获取值：this.name.value。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211152002206.png)
**问题**：ref回调方式使用内联函数，当更新组件的时候，该回调函数会执行两次，但是官网说无关紧要，如果不想调用两次，则可以在类中函数，ref中调用该函数，
例如：

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class Component1 extends React.Component {

    clickFunc = () => {
        console.log(this)
    }
    updateFunc = () => {
        this.setState({"btnMsg": "点过了"})
    }
    state = {btnMsg: "点我"}

    render() {
        return (
            <div>
                <input ref={ele => {
                    this.name = ele;
                    console.log("input函数被调用")
                }}/>
                <br/>
                <input ref={ele => {
                    this.age = ele
                }}/>
                <br/>
                <button onClick={this.clickFunc}>{this.state.btnMsg}</button>
                <button onClick={this.updateFunc}>更新组件</button>
            </div>
        )
    }
}

root.render(<Component1/>)
```

![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211152015910.png)
可以不使用内联函数

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class Component1 extends React.Component {

    clickFunc = () => {
        console.log(this)
    }
    updateFunc = () => {
        this.setState({"btnMsg": "点过了"})
    }
    nameCallback = (ele) => {
        this.name = ele
        console.log("input函数被调用")
    }
    state = {btnMsg: "点我"}

    render() {
        return (
            <div>
                <input ref={this.nameCallback}/>
                <br/>
                <input ref={ele => {
                    this.age = ele
                }}/>
                <br/>
                <button onClick={this.clickFunc}>{this.state.btnMsg}</button>
                <button onClick={this.updateFunc}>更新组件</button>
            </div>
        )
    }
}

root.render(<Component1/>)
```

运行结果如下：
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211152027092.png)

## createRef API形式

直接看示例：

```jsxx
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
    nameRef = React.createRef();
    ageRef = React.createRef();
    clickFunc = () => {
        console.log(this)
    }

    state = {btnMsg: "点我"}

    render() {
        return (
            <div>
                <input ref={this.nameRef}/><br/>
                <input ref={this.ageRef}/><br/>
                <button onClick={this.clickFunc}>{this.state.btnMsg}</button>
            </div>
        )
    }
}

root.render(<Component1/>)
```

解析：在上面的代码中。我针对两个input元素分别设置了`ref={this.nameRef}`和`ref={this.ageRef}`,其中的nameRef和ageRef是我在类中通过
`nameRef = React.createRef()`和`ageRef = React.createRef()`定义的两个ref，
在元素上直接使用`ref={this.类中的ref属性}`定义即可。
该种方式是官网推荐的方式，但是我觉得他也挺麻烦，也就是每个元素都要定义自己的ref类属性。
如果我们想获取input的值，可以使用类似`this.nameRef.value`。因为this.nameRef就是元素本身。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211161034879.png)

## Ref问题

ref官方是要求不能过度使用的，也就是说能不用就不用。但是有时候确实不能不用。
比如可以不使用的情况：一个input元素，onBlur的时候需要获取其自身的值，此时就可以不适用ref。直接传递一个函数，该函数可以接收到一个event。使用event.target.value就获得到了值。
需要使用Ref的情况：还是上面的例子，但是我要获取的是其他的元素的值，此时就需要使用Ref了。

# 严格模式

严格模式是react提供的在开发环境下助力于提示、调试的功能，它可以提示比如不推荐的ref字符串形式等等。严格模式不会影响生产使用
其实我之前写的代码都没有使用严格模式，在React tools上可以看到一个感叹号。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211161028806.png)
这就是提示没有使用严格模式。
可以在render的时候，使用`<React.StrictMode></React.StrictMode>`包裹组件即可。

```jsxx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class Component1 extends React.Component {
    render() {
        return (
            <div>
                <button>按钮</button>
            </div>
        )
    }
}

// 此处React.StrictMode设置即启用了严格模式
root.render(<React.StrictMode><Component1/></React.StrictMode>)
```

# 静态类型检查

props类型检查有多种方式，需要借助第三方库，有propsTypes、Flow、和TypeScript。
出于性能方面的考虑，propTypes 仅在开发模式下进行检查

## propTypes

需要安装该库

```shell
npm install --save prop-types
```

具体使用看代码：

```jsxx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 1.需要引入PropTypes依赖
import PropTypes from 'prop-types';
// 引入样式文件
import "./index.css"
// root的元素是index.html中的<div id="root"></div>
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

// 使用js的方式定义组件
class PropsTypeComponent extends React.Component {
    render() {
        return (
            <div>
                接收参数:{this.props.intValue}
            </div>
        )
    }
}

// 2.定义props值的类型等信息
PropsTypeComponent.propTypes = {
    // 定义intvalue是数字，并且是必须传递的。
    intValue: PropTypes.number.isRequired
}

root.render(
    <React.StrictMode>
        {/*这里我传递的intValue是字符串*/}
        <PropsTypeComponent intValue="1"/>
    </React.StrictMode>
)
```

打开浏览器运行，会看到控制台有警告日志
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211181011461.png)

## Flow & TypeScript

这两项是内容比较多，以后用到的时候再学习。先学习react基本知识。

# 组件组合

组件可能是组合的形式，一个父组件可能有多个子组件

```jsxx
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

class Header extends React.Component {
    render() {
        return <div>头部组件</div>
    }
}

class Content extends React.Component {
    render() {
        return <div>内容组件</div>
    }
}

class Footer extends React.Component {
    render() {
        return <div>底部组件</div>
    }
}

class CombinedComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>
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
```

CombinedComponent组件中有Header、Content、Footer三个子组件。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211181019647.png)

# 组件通信

通常组件通信使用props即可，但有的时候又做不到，需要使用其他方法，接下来具体来尝试下。

## 父组件给子组件传递参数

使用props即可实现。

```jsxx
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

class Header extends React.Component {
  render() {
    return <div>头部组件<h1>接收父组件参数:{this.props.parentComponentName}</h1></div>
  }
}

class Content extends React.Component {
  render() {
    return <div>内容组件</div>
  }
}

class Footer extends React.Component {
  render() {
    return <div>底部组件</div>
  }
}

class CombinedComponent extends React.Component {
  render() {
    return (
            <div>
              <Header parentComponentName="Combined"/>
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
```

在Combined中使用`<Header parentComponentName="Combined"/>`的方式将Combined通过props传递给Header组件。
在Header中通过`{this.props.parentComponentName}`获得父组件传递过来的值。
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211181023142.png)

## 子组件给父组件传递参数

也可以使用props，但是此时不能传递普通参数，需要传递函数，原理就是父组件创建一个函数，传递给子组件，子组件操作该回调函数。

```jsxx

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

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
        return <div>内容组件</div>
    }
}

class Footer extends React.Component {
    render() {
        return <div>底部组件</div>
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
```
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211181044711.png)
## 兄弟组件间参数传递
这使用props就不能实现了，得借助第三方工具，消息订阅。需要安装依赖
```shell
npm i pubsub-js -S
```
具体如何使用见代码
```jsx
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
```
![](https://itlab1024-1256529903.cos.ap-beijing.myqcloud.com/202211181055166.png)