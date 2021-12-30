import React, { Component } from "react";
import '../App.css'
import './hero.css'
import logoFont from '../assets/images/logo-w-font.png'
import logo from '../assets/images/logo.png'
import hero from '../assets/images/hero.jpeg'
import Navbar from "./navbar";


class Hero extends Component  {
    constructor(props) {
        super(props);
    }
    foo(props, string) {
        console.log("hello")
    }
    render() {

        return (
            <div className="container-hero">
                <Navbar state={this.state} {...this.props}/>
                <section className="hero">
                    <div className="hero-info">
                        <h1>Become a Renegade</h1>
                        <h4>New players welcome!  Join the team today!</h4>
                        <button>Learn more</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero;