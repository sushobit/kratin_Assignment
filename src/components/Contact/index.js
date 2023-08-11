import React from 'react';
import './index.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to get in touch with us. We are here to help!</p>
            <div className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default Contact;
