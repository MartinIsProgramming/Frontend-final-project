import React from 'react';
import { Field } from 'formik';

const SelectForm = props => {
  const { name, options, onChange } = props;
  return (
    <Field
      className="form-control"
      as="select"
      id={name}
      name={name}
      onChange={onChange}
    >
      <option>Select...</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </Field>
  );
};

export default SelectForm;
