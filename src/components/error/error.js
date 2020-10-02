import React from 'react';
import icon from './droid-r2d2-robot-star-wars-icon-6d514582eb26a244bcb41beb0682388d.svg';
import './error.css';

const Error = ({msg}) => {
    return (
        <div className="error-msg text-light m-auto">
            <div className="text-center">
                <img src={icon} alt=""/>
                <h3 className="mt-2">Oh no!!!</h3>
                <p>{msg}</p>
                <p>Our droids are already working on the issue.</p>
            </div>
        </div>
    )
}

export default Error;