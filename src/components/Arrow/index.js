import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { color } from './../../consts';

const Wrapper = styled(Col)`
  color: ${props =>
    props.state && props.state === 'up' ? color.green : color.red};
`;

const Arrow = props => {
  return (
    <Wrapper xs={2} state={props.state}>
      {props.state ? (
        <span className={`glyphicon glyphicon-arrow-${props.state}`} />
      ) : (
        '\u00A0'
      )}
    </Wrapper>
  );
};

export default Arrow;

Arrow.propTypes = {
  state: PropTypes.oneOf(['up', 'down', null]),
};
