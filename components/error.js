import Alert from 'react-bootstrap/Alert';

const error = () => {
  return (
    <Alert style={{ height: '50px' }} variant="danger">
      No matches with your filter selection!. Try with a different model.
    </Alert>
  );
};

export default error;
