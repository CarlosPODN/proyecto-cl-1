import React from 'react'
import "./Footer.css"
import { ReactComponent as HouseIcon } from "../../icon-casita.svg";
import { ReactComponent as TwitterIcon } from "../../twitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../../facebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../../instagramIcon.svg";
import { ReactComponent as WhatsappIcon } from "../../whatsappIcon.svg";

export default function Footer() {
    return (
        <div className="headerColor">
            <div className="headerArea">
                <div className="infoIcons">
                    <div className="info">
                        <a><HouseIcon /></a>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
                    </div>
                    <div className="icons">
                        <div className="icon"><TwitterIcon  /></div>
                        <div className="icon"><FacebookIcon  /></div>
                        <div className="icon"><InstagramIcon  /></div>
                    </div>
                </div>
                <div className="aboutUs">
                    <h2>About Us</h2>
                    <ul>
                        <li>About</li>
                        <li>Privacy & Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Faq</li>
                    </ul>
                </div>
                <div className="navigate">
                    <h2>Navigate</h2>
                    <ul>
                        <li>How We Work</li>
                        <li>Services</li>
                        <li>Faq</li>
                        <li>Contact</li>
                        <li>Free Quote</li>
                    </ul>
                </div>
                <div className="contactUs">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Ricardo Margain 444</li>
                        <li>Call: +52 81 1234 5678</li>
                        <li>Email: info@challenge.com</li>
                    </ul>
                    <WhatsappIcon />
                </div>
            </div>
        </div>
    )
}