// Explore.jsx
import React from 'react';
import './Explore.css';
import explore1 from '../../assets/images/explore1.png';
import explore2 from '../../assets/images/explore2.png';
import explore3 from '../../assets/images/explore3.png';
import explore4 from '../../assets/images/explore4.png';

const exploreItems = [
  {
    image: explore1,
    title: 'Home Decor',
    description: 'Transform your living space with authentic, handcrafted pieces that tell a story'
  },
  {
    image: explore2,
    title: 'Fashion & Apparel',
    description: 'Stand out with designs that blend tradition and modern flair'
  },
  {
    image: explore3,
    title: 'Accessories & Gifts',
    description: 'Thoughtfully designed items that add a personal touch to any occasion'
  },
  {
    image: explore4,
    title: 'Festive & Cultural',
    description: 'Celebrate the rich heritage of our cultures with handpicked products made for every celebration'
  },
];

const Explore = () => {
  return (
    <div className="explore-section">
      <h1 className="handpicked-title">Explore our collections and find your perfect piece.</h1>
      <div className="explore-flex">
        {exploreItems.map((item, index) => (
          <div className="explore-card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-text">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
