import React, { useEffect, useState } from 'react';
import "../App.css"// Import the CSS file for your component
import logo from "../Images/Thumbnail/MMS B.png";
const Logo = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulating a loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay time as needed
    }, []);

    return (
        <div className={`logo ${isLoading ? 'loading' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <h1>Your App Content</h1>
        </div>
    );
};

export default Logo;