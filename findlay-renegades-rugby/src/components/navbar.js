import React, { Component } from "react";
import './navbar.css'
import logoFont from '../assets/images/logo-w-font.png'


class NavBar extends Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const { switchScreen } = this.props.state;

        return (
            <div className="navbar" id="navbar">
                <div className="navbar-logo">
                    <a href='/' onClick={() => switchScreen(this.props, '/')}>
                        <img className="nav-logo-desktop" src={logoFont} href="#home"/>
                    </a>
                    <a href='/' onClick={() => switchScreen(this.props, '/')}>
                        <img className="nav-logo-mobile" src={logoFont} href="#home"/>
                    </a>
                </div>
                <div className="navbar-links">
                    <a href='/' onClick={() => switchScreen(this.props, '/')}>
                        <h2>Home</h2>
                    </a>
                    <a href='/about' onClick={() => switchScreen(this.props, '/about')}>
                        <h2>About</h2>
                    </a>
                    <a href="https://apps.apple.com/us/app/fin-aquatic-rentals/id1435736012">
                        <h2>Shop</h2>
                    </a>
                    <a href="https://apps.apple.com/us/app/fin-aquatic-rentals/id1435736012">
                        <h2>Schedule</h2>
                    </a>
                    <a href="https://apps.apple.com/us/app/fin-aquatic-rentals/id1435736012">
                        <h2>New Players</h2>
                    </a>
                    <a href="https://apps.apple.com/us/app/fin-aquatic-rentals/id1435736012">
                        <h2>Donate</h2>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar;