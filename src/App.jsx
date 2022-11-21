import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import ReactPage from "./pages/ReactPage";
import ReactCn from "./pages/ReactCn";
import ReactEn from "./pages/ReactEn";

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path="react" element={<ReactPage/>}>
                            <Route path="en" element={<ReactEn/>}/>
                            <Route path="cn" element={<ReactCn/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>)
    }
}

export default App;