import React from "react";
import "./OurCollections.css";

import collection11 from "../../assets/images/collection11.png";
import collection12 from "../../assets/images/collection12.png";
import collection13 from "../../assets/images/collection13.png";
import collection14 from "../../assets/images/collection14.png";
import collection15 from "../../assets/images/collection15.png";
import collection16 from "../../assets/images/collection16.png";
import collection17 from "../../assets/images/collection17.png";
import collection18 from "../../assets/images/collection18.png";
import collection19 from "../../assets/images/collection19.png";
import collection20 from "../../assets/images/collection20.png";
import collection21 from "../../assets/images/collection21.png";
import collection22 from "../../assets/images/collection22.png";
import collection23 from "../../assets/images/collection23.png";
import collection24 from "../../assets/images/collection24.png";
import collection25 from "../../assets/images/collection25.png";
import collection26 from "../../assets/images/collection26.png";
import collection27 from "../../assets/images/collection27.png";
import collection28 from "../../assets/images/collection28.png";
import collection29 from "../../assets/images/collection29.png";
import collection30 from "../../assets/images/collection30.png";

const OurCollections = () => {
  return (
    <section className="collections-section">
      <h1 className="collections-heading">Our Collections</h1>

      {/* First Track (Left ➔ Right) */}
      <div className="collections-track-wrapper">
        <div className="collections-track scroll-right">
          {[collection11, collection12, collection13, collection14, collection15, collection16, collection17, collection18, collection19, collection20,
            collection11, collection12, collection13, collection14, collection15, collection16, collection17, collection18, collection19, collection20
          ].map((img, index) => (
            <img key={index} src={img} alt={`Collection ${index + 11}`} className="collection-image" />
          ))}
        </div>
      </div>

      {/* Second Track (Right ➔ Left) */}
      <div className="collections-track-wrapper">
        <div className="collections-track scroll-left">
          {[collection21, collection22, collection23, collection24, collection25, collection26, collection27, collection28, collection29, collection30,
            collection21, collection22, collection23, collection24, collection25, collection26, collection27, collection28, collection29, collection30
          ].map((img, index) => (
            <img key={index} src={img} alt={`Collection ${index + 21}`} className="collection-image" />
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurCollections;
