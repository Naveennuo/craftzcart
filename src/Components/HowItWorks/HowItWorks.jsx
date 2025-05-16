// src/Components/HowItWorks/HowItWorks.jsx
import React from "react";
import './HowItWorks.css';

// Import images
import browseImg from '../../assets/images/Browse.svg';
import addImg from '../../assets/images/Add.svg';
import buyImg from '../../assets/images/Buy.svg';
import getImg from '../../assets/images/Get.svg';
import line1Img from '../../assets/images/line1.svg';
import line2Img from '../../assets/images/line2.svg';
import line3Img from '../../assets/images/line3.svg';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2 className="how-it-works-heading">How It Works</h2>

            {/* New section with 1 row */}
            <div className="how-it-works-new-steps">
                <div className="new-step">
                    <img src={browseImg} alt="Browse" className="step-image" />
                    <p className="step-label">Browse Collections</p>
                    <p className="step-description">Discover handcrafted goods in fashion, décor, and beyond</p>
                </div>
                <div className="step-line">
                    <img src={line1Img} alt="Line 1" className="step-line-image" />
                </div>
                <div className="new-step">
                    <img src={addImg} alt="Add" className="step-image" />
                    <p className="step-label">Add to Wishlist</p>
                    <p className="step-description">Tap the heart to save items you truly adore</p>
                </div>
                <div className="step-line">
                    <img src={line2Img} alt="Line 2" className="step-line-image" />
                </div>
                <div className="new-step">
                    <img src={buyImg} alt="Buy" className="step-image" />
                    <p className="step-label">Buy via the App</p>
                    <p className="step-description">Shop securely through our easy-to-use mobile app</p>
                </div>
                <div className="step-line">
                    <img src={line3Img} alt="Line 3" className="step-line-image" />
                </div>
                <div className="new-step">
                    <img src={getImg} alt="Get" className="step-image" />
                    <p className="step-label">Get it Delivered</p>
                    <p className="step-description">Receive your picks at home, wrapped with care</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
