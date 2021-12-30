import React, { Component } from "react";
import './about-hero.css'
import logoFont from '../assets/images/logo-w-font.png'
import image4 from '../assets/images/image-4.jpeg'
import Navbar from "./navbar";


class AboutHero extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-about-hero">
                <Navbar state={this.state} {...this.props}/>
                <div className="container-about">
                    <h1>History <br/> of the Renegades</h1>
                    <hr className="solid"/>
                    <caption>who we are and what we are all about</caption>
                    <hr className="solid"/>
                </div>
            </div>
        )
    }
}

export default AboutHero;