import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import your icons
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ value, color }) => {
  return (
    <div className="rating-wrapper">
      <span style={{ color }}>
        {value >= 1 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} />
        )}
      </span>
      <span style={{ color }}>
        {value >= 2 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} />
        )}
      </span>
      <span style={{ color }}>
        {value >= 3 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} />
        )}
      </span>
      <span style={{ color }}>
        {value >= 4 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} />
        )}
      </span>
      <span style={{ color }}>
        {value >= 5 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} />
        )}
      </span>
    </div>
  );
};

export default Rating;
