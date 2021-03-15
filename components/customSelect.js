import { Field } from 'formik';

const SelectForm = props => {
  const { name, options, onChange } = props;
  return (
    <Field className="form-control" as="select" name={name} onChange={onChange}>
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
