import React from 'react';
import PropTypes from 'prop-types';

const UpArrow = (
  <span className="glyphicon glyphicon-arrow-up green" aria-hidden="true" />
);

const DownArrow = (
  <span className="glyphicon glyphicon-arrow-down red" aria-hidden="true" />
);

const Arrow = props => {
  switch (props.state) {
    case 'up':
      return UpArrow;
    case 'down':
      return DownArrow;
    default:
      return '\u00A0';
  }
};

export default Arrow;

Arrow.propTypes = {
  state: PropTypes.oneOf(['up', 'down', null]),
};
