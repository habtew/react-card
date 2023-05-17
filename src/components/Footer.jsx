import React from "react";
import twitterLogo from '../img/Twitter_Icon.png'
import fbLogo from '../img/Facebook_Icon.png'
import instaLogo from '../img/Instagram_Icon.png'
import GitHub from '../img/GitHub_Icon.png';

export default function Footer(){
    return (
        <footer>
            <img src={twitterLogo} alt=" logo"/>
            <img src={fbLogo} alt=" logo"/>
            <img src={instaLogo} alt=" logo"/>
            <img src={GitHub} alt=" logo"/>
        </footer>
    )
}