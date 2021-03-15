import { Field } from 'formik';

const SelectForm = props => {
  const { name, options, ...rest } = props;
  return (
    <Field className="form-control" as="select" name={name} id={name} {...rest}>
      <option value="">Select...</option>
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
