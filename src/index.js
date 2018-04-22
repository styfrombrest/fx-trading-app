import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './assets/bootstrap.min.css';
import './global-styles';

import Home from './containers/Home';
import Page404 from './containers/Page404';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
