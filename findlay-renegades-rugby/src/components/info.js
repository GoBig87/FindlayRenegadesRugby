import React, { Component } from "react";
import '../App.css'
import './info.css'
import image1 from '../assets/images/image-1.jpeg'
import image2 from '../assets/images/image-2.jpeg'
import image3 from '../assets/images/image-3.jpeg'


class Info extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-info">
                <div className="container-title">
                    <h1>- Welcome -</h1>
                </div>
                <div className="container-content">
                    <div className="content">
                        <img src={image1}/>
                        <h4>About us</h4>
                        <caption>Dive deep into our club’s history and learn what it’s like to be a Renegade.</caption>
                        <button>About us</button>
                    </div>
                    <div className="content">
                        <img src={image2}/>
                        <h4>Schedule</h4>
                        <caption>View our schedule and scores. Also check out upcoming events!</caption>
                        <button>Schedule</button>
                    </div>
                    <div className="content">
                        <img src={image3}/>
                        <h4>Club Store</h4>
                        <caption>Get your latest club apparel & gear and dress like a Renegade!</caption>
                        <button>Store</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;