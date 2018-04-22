import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Panel, Label } from 'react-bootstrap';

import { color } from './../../consts';

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

  &:hover {
    border: 1px solid ${color.blue};
    cursor: pointer;
  }
`;

const UpArrow = (
  <span className="glyphicon glyphicon-arrow-up green" aria-hidden="true" />
);

const DownArrow = (
  <span className="glyphicon glyphicon-arrow-down red" aria-hidden="true" />
);

const Caption = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

const Value = styled.p`
  font-size: 18px;
  font-weight: 400;
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
                <Value>{props.sell}</Value>
              </Pad>
            </PadWrapper>
            <Col xs={2}>{UpArrow}</Col>
            <PadWrapper xs={5} className="green">
              <Pad className="text-right">
                <Caption>Buy {currency}</Caption>
                <Value>
                  {props.buy}
                  {/*                 1.44<span style={{ fontSize: '22px', fontWeight: 900 }}>
                  44
                </span> */}
                </Value>
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
  buy: PropTypes.number.isRequired,
  sell: PropTypes.number.isRequired,
};
