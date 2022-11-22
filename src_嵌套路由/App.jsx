import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Java from "./pages/Home/Java";
import Golang from "./pages/Home/Golang";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="home" element={<Home/>}>
                            <Route path="go" element={<Golang/>}/>
                            <Route path="java" element={<Java/>}/>
                        </Route>
                        <Route path="about" element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;