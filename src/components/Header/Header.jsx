import React from "react"
import "./Header.css"
import { ReactComponent as HouseIcon } from "../../icon-casita.svg";

export default function Navbar() {
    return (
        <div className="navColor">
            <div    className="navArea">
                <div className="iconCasita">
                    <a><HouseIcon /></a>
                </div>
                <ul className="navList">
                    <li><a>How We Work</a></li>
                    <li><a>Services</a></li>
                    <li><a>Free Quote</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}