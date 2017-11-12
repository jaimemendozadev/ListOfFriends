import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import RootReducer from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

import SignUp from './components/SignUp.jsx';
import Dashboard from './components/Dashboard.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.querySelector('.container'));