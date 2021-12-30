import React, {Component} from 'react';
import './App.css';
import { Routes , Route } from "react-router-dom";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchScreen: this.switchScreen
        }
    }
    switchScreen = (props, params) => {
        console.log('switching screen')
        console.log(params)
        props.history.push(params);
    };
    render() {
        return(
                <Routes>
                    <Route path="/" element={<HomePage state={this.state} {...this.props}/>} />
                    <Route path="/about" element={<AboutPage state={this.state} {...this.props}/>} />
                </Routes>
        );
    }
}

export default App;