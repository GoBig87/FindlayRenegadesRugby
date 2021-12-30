import React, { Component } from "react";
import '../App.css'
import './home.css'
import logoFont from '../assets/images/logo-w-font.png'
import logo from '../assets/images/logo.png'
import hero from '../assets/images/hero.jpeg'
import Hero from "../components/hero";
import Info from "../components/info"
import Sponsors from "../components/sponsors"
import Footer from "../components/footer"
import AboutPage from "./about";


class HomePage extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-app">
                <Hero state={this.state} {...this.props}/>
                <Info state={this.state} {...this.props}/>
                <Sponsors state={this.state} {...this.props}/>
                <Footer state={this.state} {...this.props}/>
            </div>
        )
    }
}

export default HomePage;
