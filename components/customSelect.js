const SelectForm = props => {
  const { name, options, ...rest } = props;
  return (
    <select className="custom-select" name={name} id={name} {...rest}>
      {options.length === 0 ? (
        <option value="">No models avilable</option>
      ) : (
        options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })
      )}
    </select>
  );
};

export default SelectForm;
