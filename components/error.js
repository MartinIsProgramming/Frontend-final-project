import Alert from 'react-bootstrap/Alert';

const error = () => {
  return (
    <Alert style={{ height: '50px' }} variant="danger">
      No matches with your filter selection!.
    </Alert>
  );
};

export default error;
