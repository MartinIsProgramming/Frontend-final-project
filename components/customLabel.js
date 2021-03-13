import React from 'react';

const CustomLabel = props => {
  const { htmlFor, name } = props;
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {name}
    </label>
  );
};

export default CustomLabel;
