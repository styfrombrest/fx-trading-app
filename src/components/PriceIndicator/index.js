import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Panel } from 'react-bootstrap';

import { color } from './../../consts';
import CurrencyView from './../CurrencyView';

const PadWrapper = styled(Col)`
  padding: 0 5px;
`;

const Pad = styled(Panel)`
  padding: 5px;
  margin-bottom: 0;
  color: ${props => (props.type === 'buy' ? color.green : color.red)};
  text-align: ${props => (props.type === 'buy' ? 'right' : 'left')};

  &:hover {
    border: 1px solid ${color.blue};
    cursor: pointer;
    background-color: ${props =>
      props.type === 'buy' ? color.green : color.red};
    color: ${color.white};
    text-shadow: -1px 0 ${color.black}, 0 1px ${color.black},
      1px 0 ${color.black}, 0 -1px ${color.black};
  }
`;

const Caption = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const PriceType = styled.span`
  text-transform: capitalize;
`;

const PriceIndicator = props => (
  <PadWrapper xs={5}>
    <Pad type={props.type}>
      <Caption>
        <PriceType>{props.type}</PriceType> {props.currency}
      </Caption>
      <CurrencyView value={props.value} />
    </Pad>
  </PadWrapper>
);

export default PriceIndicator;

PriceIndicator.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['buy', 'sell']).isRequired,
};
