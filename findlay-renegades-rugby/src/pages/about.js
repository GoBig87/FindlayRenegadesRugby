import React, { Component } from "react";
import '../App.css'
import './about.css'
import AboutHero from "../components/about-hero";
import AboutInfo from "../components/about-info";
import Footer from "../components/footer";



class AboutPage extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-app">
                <AboutHero state={this.state} {...this.props}/>
                <hr className="about-line"/>
                <AboutInfo state={this.state} {...this.props}/>
                <Footer state={this.state} {...this.props}/>
            </div>
        )
    }
}

export default AboutPage;
