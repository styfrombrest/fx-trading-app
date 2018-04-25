import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './../Header/';

const Content = styled.div`
  padding: 16px;
`;

const Page = props => (
  <div>
    <Header title={props.headerTitle} />
    <Content className="container">{props.children}</Content>
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  headerTitle: PropTypes.string.isRequired,
};
