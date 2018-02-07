import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/video">Video</Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
