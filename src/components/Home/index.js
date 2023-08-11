import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
    return (
        <div className='main-container'>
            <div className='card-container'>
                <h1 className='top-head'>WALK-IN <br/> MEDICAL CARE </h1> 
                <h1 className='mid-head'>FOR ADULTS & CHILDREN</h1>
                <p className='paragraph'>Monday - Saturday: 7:00am – 7:30pm  <br/>Sunday: 7:00am – 4:30pm</p>
                <Link to="/doctors"><button className='button'>Book an Appointment</button></Link>
            </div>
        </div>
    );
};

export default HomePage;