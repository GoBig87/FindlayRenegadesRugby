import React, { Component } from "react";
import './footer.css'
import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


class Footer extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-footer">
                <div className="container-logo">
                    <img src={logo}/>
                </div>
                <div className="container-contact">
                    <h4>Contact Us</h4>
                    <caption>Findlay Renegades Rugby</caption>
                    <caption>Email: admin@findlayrenegadesrugby.com</caption>
                    <caption>Phone: (555)-555-5555</caption>
                    <h4>Follow Us</h4>
                    <div className="container-icons">
                        <FontAwesomeIcon className="icon" icon={faFacebook}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;