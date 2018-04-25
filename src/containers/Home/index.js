import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

import { loadData } from './../../actions/';
import Page from './../../components/Page';
import TradePanel from './../../components/TradePanel';
import ErrorMessage from './../../components/ErrorMessage';
import { reloadTimeout } from './../../consts';

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
});
const mapDispatchToProps = { loadData };

class Home extends React.Component {
  state = { data: {} };

  static getDerivedStateFromProps(props, state) {
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
        return true;
      });
    }
    return state;
  }

  componentDidMount() {
    this.props.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error === null) {
      setTimeout(() => {
        this.props.loadData();
      }, reloadTimeout || 5000);
    }
  }

  render() {
    const { error } = this.props;
    const { data } = this.state;
    return (
      <Page headerTitle="FX Trading App">
        <ErrorMessage
          message={error}
          reloadHandler={() => this.props.loadData()}
        />
        <Row className="text-center">
          {data && Object.keys(data).length ? (
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
            <span>{'No data from API :('}</span>
          )}
        </Row>
      </Page>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
