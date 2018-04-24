import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Emphasize = styled.span`
  font-size: 22px;
  font-weight: 900;
`;

const CurrencyView = props => {
  const normalPart = String(props.value).slice(0, -3);
  const emphasizedPart = String(props.value).slice(-3, -1);
  const supPart = String(props.value).slice(-1);

  return (
    <Wrapper>
      {normalPart}
      <Emphasize>{emphasizedPart}</Emphasize>
      <sup>{supPart}</sup>
    </Wrapper>
  );
};

export default CurrencyView;

CurrencyView.propTypes = {
  value: PropTypes.number.isRequired,
};
