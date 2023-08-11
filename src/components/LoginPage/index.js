import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Welcome</h2>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        className='loginput'
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        className='loginput'
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <Link to="/home"><button>Login</button></Link>
            </form>
        </div>
    );
};

export default LoginPage;
