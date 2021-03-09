import React from 'react';
import Form from 'react-bootstrap/Form';

const FormGroup = ({ text, option }) => {
  return (
    <Form.Group>
      <Form.Label>{text}</Form.Label>
      <Form.Control as="select">
        <option>{option}</option>
      </Form.Control>
    </Form.Group>
  );
};

export default FormGroup;
