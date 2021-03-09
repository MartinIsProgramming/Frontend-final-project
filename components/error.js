import React from 'react';
import Alert from 'react-bootstrap/Alert';

const error = () => {
  return (
    <Alert style={{ height: '50px' }} variant="danger">
      Something went wrong when loading the data!
    </Alert>
  );
};

export default error;
