import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reduce from 'reducers';
import saga from 'sagas';
import App from 'containers/app';
import Frontdoor from 'containers/frontdoor';
import NewOffer from 'containers/new_offer';

const store = createStore(reduce, applyMiddleware(createSagaMiddleware(saga)));

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Frontdoor} />
        <Route path="/offers/new" component={NewOffer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
