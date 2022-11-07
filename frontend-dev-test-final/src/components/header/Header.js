import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerCenter">
                <Link to="/" style={{textDecoration: "none"}}><span>MY CinePlex</span></Link>
                <Link to="/" style={{textDecoration: "none"}}><span>EN <i className="fas fa-angle-down"></i></span></Link>
            </div>
        </div>
    )
}

export default Header