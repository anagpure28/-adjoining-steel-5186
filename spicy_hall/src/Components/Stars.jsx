import React from 'react';

const StarRating = ({ rating }) => {
  const addStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;

    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    if (halfStar === 1) {
      starsArray.push(<i key="half" className="fa-solid fa-star-half"></i>);
    }
    return starsArray;
  };

  return (
    <div>
      <p id="rating">{rating}</p>
      <div id="stars-container">{addStars(rating)}</div>
    </div>
  );
};

export default StarRating;
