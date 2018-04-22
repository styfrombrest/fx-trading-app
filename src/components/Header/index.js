import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { headerBgColor, headerBorderColor, color } from './../../consts';

const HeaderElement = styled.header`
  background-color: ${headerBgColor};
  border-top: 1em solid ${headerBorderColor};
  box-sizing: content-box;
  text-align: left;
`;

const Title = styled.h1`
  padding-left: 2em;
  font-weight: 300;
  color: ${color.white};
`;

const Header = props => (
  <HeaderElement>
    <div className="container">
      <Title>{props.title}</Title>
    </div>
  </HeaderElement>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
