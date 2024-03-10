import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', height: '100px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
            <div className="footer-content" style={{ textAlign: 'center' }}>
                <NavLink
                    className="footer-brand"
                    to="/dashboard"
                    style={{
                        color: 'white',
                        fontSize: '1.5em',
                        textDecoration: 'none' // To remove underline
                    }}
                >
                    RANGAMART COLLECTION
                </NavLink>
                <p style={{
                        color: 'white'}}>www.rangaMart.com</p>
            </div>
        </footer>
    );
}

export default Footer;