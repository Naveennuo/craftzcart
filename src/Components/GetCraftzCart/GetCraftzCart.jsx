import React from "react";
import "./GetCraftzCart.css";
import Mobile1 from "../../assets/images/Mobile1.png";
import Mobile2 from "../../assets/images/Mobile2.png";
import Mobile3 from "../../assets/images/Mobile3.png";
import googlePlay from "../../assets/images/google-play.svg";
import appStore from "../../assets/images/app-store.svg";

const GetCraftzCart = () => {
  return (
    <section className="get-craftzcart-section">
      {/* Old Heading (keep this above images) */}
      <h1 className="get-craftzcart-heading">
        Get the CraftzCart App
      </h1>

      {/* Mobile Images */}
      <div className="mobile-images">
        <img src={Mobile2} alt="Mobile Left" className="mobile mobile-left" />
        <img src={Mobile1} alt="Mobile Center" className="mobile mobile-center" />
        <img src={Mobile3} alt="Mobile Right" className="mobile mobile-right" />
      </div>

      {/* New Heading and Subheading after images */}
      <div className="after-images-text">
        <h2 className="after-images-heading">
          CraftzCart is available exclusively on mobile
        </h2>
        <p className="after-images-subheading">
          Download the CraftzCart app today and support the world of handmade!
        </p>
        <div className="store-icons1">
              <img src={googlePlay} alt="Google Play" className="store-icon1" />
              <img src={appStore} alt="App Store" className="store-icon1" />
            </div>
      </div>
    </section>
  );
};

export default GetCraftzCart;
