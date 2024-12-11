import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsLetter.css';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubscribe = () => {
        // Validate email format
        const emailRegex = /^[^\s@]+@gmail\.com$/; // Allow only @gmail.com emails
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid @gmail.com email.');
            return;
        }

        // Save to localStorage (optional, to track subscribed emails)
        const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        if (!subscribedEmails.includes(email)) {
            subscribedEmails.push(email);
            localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
        }

        // Navigate to the newsletter photo page
        navigate('/NewsLetter-photo');
    };

    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input
                    type="email"
                    placeholder="Your Email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            {message && <p className="error-message">{message}</p>}
        </div>
    );
};

export default NewsLetter;
