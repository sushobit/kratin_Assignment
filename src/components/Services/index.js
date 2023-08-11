import React from 'react';
import './index.css';

const Service = ({ imageSrc, title, description }) => {
    return (
        <div className="service-card">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;
