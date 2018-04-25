import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Panel } from 'react-bootstrap';

import Arrow from './../Arrow';
import PriceIndicator from './../PriceIndicator';

const PanelWrapper = styled(Col)`
  width: 270px;
  margin: 10px;
  display: inline-block;
  padding: 0;
`;

const TradePanel = props => {
  // get first currency from title
  const currency = props.title ? props.title.split(' ')[0] : null;

  return (
    <PanelWrapper lg={3}>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title className="text-center" componentClass="h3">
            {props.title}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Row>
            <PriceIndicator
              type="sell"
              currency={currency}
              value={props.sellValue}
            />

            <Arrow state={props.arrowState} />

            <PriceIndicator
              type="buy"
              currency={currency}
              value={props.buyValue}
            />
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
