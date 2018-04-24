import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import { loadData } from './../../actions/';
import Page from './../../components/Page';
import TradePanel from './../../components/TradePanel';
import ErrorMessage from '../../components/ErrorMessage';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
});
const mapDispatchToProps = { loadData };

class Home extends Component {
  state = { data: {} };

  static getDerivedStateFromProps(props, state) {
    // console.log('!', props.data);
    if (props.data) {
      // handle arrow state according to buy value changes
      Object.keys(props.data).map(item => {
        let arrowState = null;
        if (state.data[item]) {
          if (state.data[item].buy > props.data[item].buy) {
            arrowState = 'down';
          } else if (state.data[item].buy < props.data[item].buy) {
            arrowState = 'up';
          }
        }
        state.data[item] = { ...props.data[item], arrowState };
      });
    }
    return state;
  }

  componentDidMount() {
    this.props.loadData();
  }

  componentDidUpdate() {
    // if (this.props.error === null)
    // setTimeout(() => this.props.loadData(), 1000);
  }

  render() {
    const { error, data } = this.props;
    return (
      <Page headerTitle="FX Trading App">
        <ErrorMessage
          message={error}
          reloadHandler={() => this.props.loadData()}
        />
        <Row>
          {data ? (
            Object.keys(data).map(item => (
              <TradePanel
                key={item}
                title={item}
                buyValue={data[item].buy}
                sellValue={data[item].sell}
                arrowState={data[item].arrowState}
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
