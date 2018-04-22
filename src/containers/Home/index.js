import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import { loadData } from './../../actions/';
import Page from './../../components/Page';
import TradePanel from './../../components/TradePanel';

const mapStateToProps = state => ({
  data: state.data,
});
const mapDispatchToProps = { loadData };

class Home extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { data } = this.props;
    return (
      <Page headerTitle="FX Trading App">
        <Row>
          {data && data.length ? (
            data.map(item => (
              <TradePanel
                key={item.pair}
                title={item.pair}
                buy={item.buy}
                sell={item.sell}
              />
            ))
          ) : (
            <span>No data</span>
          )}
        </Row>
      </Page>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
