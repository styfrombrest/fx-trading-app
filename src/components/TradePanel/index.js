import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Panel, Label } from 'react-bootstrap';

import { color } from './../../consts';
import Arrow from './../Arrow';
import CurrencyView from './../CurrencyView';

const PanelWrapper = styled(Col)`
  width: 300px;
  margin: 10px;
  display: inline-block;
`;

const PadWrapper = styled(Col)`
  padding: 0 5px;
`;

const Pad = styled(Panel)`
  padding: 5px;
  margin-bottom: 0;

  &:hover {
    border: 1px solid ${color.blue};
    cursor: pointer;
  }
`;

const Caption = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const TradePanel = props => {
  // get first currency from title
  const currency = props.title ? props.title.split(' ')[0] : null;

  return (
    <PanelWrapper>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{props.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body className="text-left">
          <Row>
            <PadWrapper xs={5} className="red">
              <Pad>
                <Caption>Sell {currency}</Caption>
                <CurrencyView value={props.sellValue} />
              </Pad>
            </PadWrapper>
            <Col xs={2}>
              <Arrow state={props.arrowState} />
            </Col>
            <PadWrapper xs={5} className="green">
              <Pad className="text-right">
                <Caption>Buy {currency}</Caption>
                <CurrencyView value={props.buyValue} />
              </Pad>
            </PadWrapper>
          </Row>
        </Panel.Body>
      </Panel>
    </PanelWrapper>
  );
};

export default TradePanel;

TradePanel.propTypes = {
  title: PropTypes.string.isRequired,
  buyValue: PropTypes.number.isRequired,
  sellValue: PropTypes.number.isRequired,
  arrowState: PropTypes.string,
};
