import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert, Button } from 'react-bootstrap';

const ErrorMessage = props => {
  return props.message ? (
    <Row>
      <Col xs={12}>
        <Alert bsStyle="danger" className="text-left">
          <h4>Error!</h4>
          <p>{props.message}</p>
          <p>
            <Button bsStyle="danger" onClick={() => props.reloadHandler()}>
              Reload data
            </Button>
          </p>
        </Alert>
      </Col>
    </Row>
  ) : (
    <div />
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  reloadHandler: PropTypes.func.isRequired,
  message: PropTypes.string,
};
