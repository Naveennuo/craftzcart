import React, { useState } from "react";
import "./ContactUs.css";

// Importing the SVG files
import xIcon from "../../assets/images/x.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

import xIconHover from "../../assets/images/x1.svg";
import facebookIconHover from "../../assets/images/facebook1.svg";
import instagramIconHover from "../../assets/images/instagram1.svg";
import linkedinIconHover from "../../assets/images/linkedin1.svg";

// Icons array with default and hover states
const icons = [
  { default: xIcon, hover: xIconHover, alt: "X Icon" },
  { default: facebookIcon, hover: facebookIconHover, alt: "Facebook Icon" },
  { default: instagramIcon, hover: instagramIconHover, alt: "Instagram Icon" },
  { default: linkedinIcon, hover: linkedinIconHover, alt: "LinkedIn Icon" },
];

const ContactUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="contact-us" className="contact-section">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-line"></div>

      <div className="contact-content">
        {/* Column 1: Contact Details */}
        <div className="contact-column-details">
          <div className="contact-item">
            <h2 className="contact-title">Address</h2>
            <p className="contact-text">
              Lorem ipsum dolor sit amet consectetur<br />
              sed do eiusmod tempor incididunt ut labore<br />
              et dolore magna aliqua
            </p>
          </div>
          <div className="contact-item">
            <h2 className="contact-title">Email</h2>
            <p className="contact-text">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="contact-item">
            <h2 className="contact-title">Phone No</h2>
            <p className="contact-text">+91 98765 43210</p>
          </div>
        </div>

        {/* Column 2: Social Media Icons */}
        <div className="contact-column-social">
          <div className="icon-container">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`social-icon ${hoveredIndex === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === index ? icon.hover : icon.default}
                  alt={icon.alt}
                  className="icon"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Contact Form */}
        <div className="contact-column-form">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="Enter First Name" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Enter Last Name" className="form-input" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label className="form-label">Mobile No</label>
                <input type="text" placeholder="Enter Mobile No" className="form-input" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label className="form-label">Email Id</label>
                <input type="email" placeholder="Enter Email Id" className="form-input" />
              </div>
            </div>

            <div className="form-row">
              <button type="submit" className="form-button">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
