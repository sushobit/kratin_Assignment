import React, { useState } from 'react';
import Modal from 'react-modal'; 
import { Link } from 'react-router-dom';
import './index.css';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleBookAppointment = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='appiontmentmain'>
            <div className="appointment-container">
                <h2>Book an Appointment</h2>
                <label htmlFor="date">Select Date: </label>
                <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
                <br />
                <label htmlFor="time">Select Time: </label>
                <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} />
                <br />
                <button className='appbutton' onClick={handleBookAppointment}>Book Appointment</button>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
            <div className='thankcont'> 
                <div className="thankyou-container">
                    <h2>Thank You for Booking an Appointment!</h2>
                    <p>Your appointment has been scheduled successfully.</p>
                    <Link to="/doctors"><button className='closebutton'>Close</button></Link>
                </div>
            </div>
            </Modal>
        </div>
    );
};

export default Appointment;
