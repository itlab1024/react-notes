import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                        <li>
                            <NavLink to="/react">React页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vue">vue页面</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/react" element={<ReactComponent/>}/>
                        <Route path="/vue" element={<VueComponent/>}/>
                        <Route path="/" element={<HomeComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </div>)
    }
}

function ReactComponent() {
    return (
        <div>
            <h1>react页面</h1>
            <ul>
                <li>
                    <NavLink to="/react/centos">centos</NavLink>
                </li>
                <li>
                    <NavLink to="/react/ubuntu">ubuntu</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/centos" element={<CentosComponent/>}/>
                <Route path="/ubuntu" element={<UbuntuComponent/>}/>
            </Routes>
        </div>
    )
}
function CentosComponent() {
    return <h1>centos页面</h1>
}

function UbuntuComponent() {
    return <h1>ubuntu页面</h1>
}

function VueComponent() {
    return <h1>vue页面</h1>
}

function HomeComponent() {
    return <h1>主页面</h1>
}

export default App;