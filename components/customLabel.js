const CustomLabel = props => {
  const { htmlFor, label } = props;
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default CustomLabel;
