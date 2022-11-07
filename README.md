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
    const root = document.getElementById("root");
    const btn = <button>hello react</button>
    ReactDOM.render(btn, root, function () {
        alert("渲染完毕")
    })
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
```shell

```
