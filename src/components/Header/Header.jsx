import React from "react"
import "./Header.css"
import { ReactComponent as HouseIcon } from "../../Icons/icon-casita.svg";

export default function Navbar() {
    return (
        <div className="navColor">
            <div    className="navArea">
                <div className="iconCasita">
                    <a><HouseIcon /></a>
                </div>
                <ul className="navList">
                    <li><a href="#">How We Work</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Free Quote</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}