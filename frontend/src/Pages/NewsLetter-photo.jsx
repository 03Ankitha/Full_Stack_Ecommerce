import React from 'react';
import paper from '../Components/Assets/Newsletter.png'

const NewsLetterPhoto = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Thank You for Subscribing!</h1>
            <img
                src={paper} // Replace with the actual path to your image
                alt="Newsletter"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    );
};

export default NewsLetterPhoto;
