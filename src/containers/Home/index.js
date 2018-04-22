import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    return (
      <Page headerTitle="FX Trading App">
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TradePanel />
        </div>
        <p>
          <Link to="/404">404 route</Link>
        </p>
      </Page>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
