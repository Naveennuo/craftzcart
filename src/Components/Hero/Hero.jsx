import React, { useState, useEffect } from "react";
import icon from "../../assets/images/icon.svg";
import pieceImage from "../../assets/images/pot.png";
import googlePlay from "../../assets/images/google-play.svg";
import appStore from "../../assets/images/app-store.svg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import waveLeft from "../../assets/images/wave-left.svg";  // Import wave-left.svg
import waveRight from "../../assets/images/wave-right.svg";  // Import wave-right.svg
import elementsImg from "../../assets/images/elements.png";
import "./Hero.css"; // Reuse same styles for now

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="hero-container"
      style={{
        background: `url(${waveLeft}) top left no-repeat, url(${waveRight}) bottom right no-repeat`,
        backgroundSize: isMobile ? "60%, 60%" : "30%, 30%",
        minHeight: "600px",
        padding: isMobile ? "30px 20px" : "40px 100px",
      }}
    >
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-heading" style={{ fontSize: isMobile ? 32 : 100 }}>
            <span>Where Every</span>
            <img
              src={pieceImage}
              alt="CraftzCart Piece"
              className="piece-image"
            />
            <span>Piece</span>
          </h1>
          <h1 className="hero-heading" style={{ fontSize: isMobile ? 32 : 100 }}>
            Tells a CraftzCart Story
          </h1>
          <p className="hero-subtext" style={{ fontSize: isMobile ? 18 : 36 }}>
            Handcrafted treasures made with soul, tradition, and love. <br />
            Discover India's finest handmade products from local artisans.
          </p>
          <div className="download-section">
            <h2 className="download-text">Download our app and buy products</h2>
            <div className="store-icons">
              <img src={googlePlay} alt="Google Play" className="store-icon" />
              <img src={appStore} alt="App Store" className="store-icon" />
            </div>
          </div>
        </div>

        <div className="right-wrapper">
          <div className="right-container">
          <img src={elementsImg} alt="Elements" className="elements" />
            <div className="logo-wrapper">
              <img src={icon} alt="CraftzCart Icon" className="centered-logo" />
            </div>
            <img src={image1} alt="Top" className="image image1" />
            <div className="logo-and-images-container">
              <img src={image2} alt="Bottom Left" className="image image2" />
              <img src={image3} alt="Bottom Right" className="image image3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;