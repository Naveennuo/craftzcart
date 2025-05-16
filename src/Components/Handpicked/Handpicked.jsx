import React from "react";
import "./Handpicked.css";

import collection1 from "../../assets/images/collection1.png";
import collection2 from "../../assets/images/collection2.png";
import collection3 from "../../assets/images/collection3.png";
import collection4 from "../../assets/images/collection4.png";
import collection5 from "../../assets/images/collection5.png";

const Handpicked = () => {
  return (
    <>
      <section className="handpicked">
        <h2 className="handpicked-title">Handpicked. Handmade. Heartfelt.</h2>
        <p className="handpicked-description">
          At CraftzCart, each collection celebrates the spirit of handmade artistry.
          Whether you're looking to revamp your space or add a unique touch to your style,
          our thoughtfully curated categories make it easy to find what speaks to you.
        </p>
        <p className="handpicked-description">
          Explore everything from earthy home décor and ethnic fashion to charming
          accessories and meaningful gifts — all crafted by skilled artisans who pour
          passion into every piece.
        </p>
        <p className="handpicked-description">
          Discover the beauty of tradition, one collection at a time.
        </p>
      </section>

      <div className="collection-outer">
        <div className="collection-inner">
          <img src={collection4} alt="Collection 4" className="img img1" />
          <img src={collection2} alt="Collection 2" className="img img2" />
          <img src={collection1} alt="Collection 1" className="img img3" />
          <img src={collection3} alt="Collection 3" className="img img4" />
          <img src={collection5} alt="Collection 5" className="img img5" />
        </div>
      </div>

      {/* NEW SECTION BELOW IMAGES */}
      <section className="handpicked-message">
        <p>
          At CraftzCart, we believe in the power of handmade products to bring people closer
          to culture, tradition, and creativity. Every item in our collection has a unique story,
          carefully crafted by artisans who have honed their skills over years, if not generations.
        </p>
        <p>
          When you shop with us, you’re not just buying a product; you’re embracing the artistry
          and passion of a community. Whether you're decorating your home, gifting a loved one,
          or treating yourself to something special, CraftzCart offers timeless treasures that hold
          both beauty and meaning.
        </p>
        <p>
          Join us in supporting artisans and preserving traditional crafts while adding something
          truly exceptional to your life.
        </p>
      </section>
    </>
  );
};

export default Handpicked;
