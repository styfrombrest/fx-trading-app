import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Panel } from 'react-bootstrap';

const TradePanel = props => (
  <Col xs={4}>
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Panel heading</Panel.Title>
      </Panel.Heading>
      <Panel.Body>Panel content</Panel.Body>
    </Panel>
  </Col>
);

export default TradePanel;
