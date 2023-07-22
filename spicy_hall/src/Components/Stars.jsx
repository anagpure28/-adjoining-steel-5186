import React from 'react';

const StarRating = ({ rating }) => {
  const addStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;

    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<i key={i} style={{margin:"3px"}} className="far fa-star"></i>);
    }
    if (halfStar === 1) {
      starsArray.push(<i key="half"  style={{margin:"3px"}} className="far fa-star-half"></i>);
    }
    return starsArray;
  };

  return (
    <div>
      {/* <p id="rating">{rating}</p> */}
      <div id="stars-container">{addStars(rating)}</div>
    </div>
  );
};

export default StarRating;
