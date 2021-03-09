import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const spinner = () => {
  return (
    <Spinner
      style={{
        width: '100px',
        height: '100px',
        margin: '10rem auto',
        display: 'block',
      }}
      animation="border"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default spinner;
