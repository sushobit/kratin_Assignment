import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const DoctorCard = ({ imageSrc, name, specialties, expertise, experience }) => {
    return (
        <div className="doctor-card">
            <img src={imageSrc} alt={name} className="doctor-image" />
            <div className="doctor-content">
                <h3 className="doctor-name">{name}</h3>
                <p className="doctor-details">
                    <strong>Specialties:</strong> {specialties}
                </p>
                <p className="doctor-details">
                    <strong>Expertise:</strong> {expertise}
                </p>
                <p className="doctor-details">
                    <strong>Experience:</strong> {experience} years
                </p>
                <Link to="/appointment"><button className='doctor-button'>Make an Appointment</button></Link>
            </div>
        </div>
    );
};

export default DoctorCard;
