import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">MediCo</div>
                <div className="footer-contact">
                    <p>Contact Us:</p>
                    <p>Email: info@medico.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 HealthCare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
