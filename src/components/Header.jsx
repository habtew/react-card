import React from "react";
import logo from '../img/Rectangle_90.png';
import emailLogo from '../img/small-email-icon-29.jpg';
import LLogo from '../img/Twitter_Icon.png';

export default function Header(){
    return (
        <header>
            <img src={logo} alt="logo" className="header-logo" />
            <div className="header--detail">
                <h1>Laura Smith</h1>
                <h4>Front end developer</h4>
                <p>laurasmith.website</p>
                <div className="header--detail--contact">
                    <a><img src={LLogo} alt="email logo" className="email-logo"/>Email</a>
                    <a className="linkedin-logo"><img src={LLogo} alt="linkedin logo" />Linkedin</a>
                </div>

            </div>
        </header>
    )
}