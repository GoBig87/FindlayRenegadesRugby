import React, { Component } from "react";
import './sponsors.css'


class Sponsors extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-sponsors">
                <div className="container-title">
                    <h1>- Sponsors -</h1>
                </div>
                <div className="container-construction">
                    <h1>- Under construction -</h1>
                </div>
            </div>
        )
    }
}

export default Sponsors;