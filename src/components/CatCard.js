import React from 'react';
import './CatCard.css';

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <img 
        src={cat.image || '/cat-placeholder.jpg'} 
        alt={cat.name}
        className="cat-image"
      />
      <div className="cat-info">
        <h3>{cat.name}</h3>
        <p><strong>Breed:</strong> {cat.breed}</p>
        <p><strong>Age:</strong> {cat.age} years</p>
        <p><strong>Personality:</strong> {cat.personality}</p>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default CatCard;
