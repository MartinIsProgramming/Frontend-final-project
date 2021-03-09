import React from 'react';
import Form from 'react-bootstrap/Form';

const FormGroup = ({ text, options }) => {
  return (
    <Form.Group>
      <Form.Label>{text}</Form.Label>
      <Form.Control as="select">
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </Form.Control>
    </Form.Group>
  );
};

export default FormGroup;
