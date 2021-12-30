import React, { Component } from "react";
import './about-info.css'
import logo from '../assets/images/logo.png'

class AboutInfo extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about-info">
                <div className="about-info-logo">
                    <h1>EST</h1>
                    <img src={logo}/>
                    <h1>2001</h1>
                </div>
                <div className="about-info-text">
                    <body>
                    FRFC is a Non-Profit Rugby Club located in Northwest Ohio in the city of Findlay. We love two things: Playing rugby and helping our community. Your donations allow us to promote the sport of rugby and helps us to do more things for great local causes.
                    Our men's club is called The" Scars" and was established in 1972.  You can come watch our games at our home field located at 3336 County Road 140 in Findlay, OH.
                    </body>
                </div>
            </div>
        )
    }
}

export default AboutInfo;