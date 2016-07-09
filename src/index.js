import React from 'react';
import { render } from 'react-dom';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as reducers from 'redux/modules';
import {
  ROOT_URL,
  authenticateUser,
  fetchingUser,
  fetchingUserSuccess,
  fetchingUserFailure
} from './redux/modules/users';
import getRoutes from './config/routes';
import { checkIfAuthenticated } from './helpers/utils';

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

// Check if the user is authenticated initially
const token = localStorage.getItem('token');
let config = {};
config = {
  headers: { 'Authorization': `Bearer ${token}` }
}

// Initial load of page or when user refresh the page,
// if user is already signed in, user has the token.
// So go ahead fetch the user data from the server
if (token) {
  store.dispatch(authenticateUser());
  store.dispatch(fetchingUser());
  axios.get(`${ROOT_URL}/auth/userdata`, config)
    .then((res) => {
      store.dispatch(fetchingUserSuccess(res.data));
    })
    .catch((err) => {
      store.dispatch(fetchingUserFailure(err));
    });
}

// Check if user is authenticated before letting the user
// access to certain routes
function checkAuthentication(nextState, replace) {
  const isAuthenticated = checkIfAuthenticated(store, token);
  const nextPathName = nextState.location.pathname;

  if (nextPathName === '/' || nextPathName === '/signin') {
    if (isAuthenticated === true) {
      replace('/create-review');
    }
  } else {
    if (isAuthenticated !== true) {
      replace('/signin');
    }
  }
}

render(
  <Provider store={store}>
    {getRoutes(checkAuthentication)}
  </Provider>,
  document.getElementById('app')
)
