import React from 'react' 
import logo from './images/logo_idea.png'
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <h2>Created by The Mojo Works</h2>
            <img className="logo" src={logo} alt="logo"></img>
        </div>
    )
}

export default Footer