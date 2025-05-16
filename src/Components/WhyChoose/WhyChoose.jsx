import React from 'react';
import './WhyChoose.css';

import Authentic from '../../assets/images/Authentic.png';
import Wide from '../../assets/images/Wide.png';
import Empowering from '../../assets/images/Empowering.png';
import Smooth from '../../assets/images/Smooth.png';

const cardData = [
  { title: "Authentic Handcrafted Products", image: Authentic },
  { title: "Wide Range of Unique Items", image: Wide },
  { title: "Empowering Local Artisans", image: Empowering },
  { title: "Smooth and Secure App Shopping", image: Smooth },
];

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <h1 className="why-choose-heading">Why Choose CraftzCart?</h1>
      <div className="why-choose-cards">
        {cardData.map((card, index) => (
          <div
            className="why-choose-card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="card-content">
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
