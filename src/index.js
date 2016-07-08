import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Main from './containers/main/mainContainer';
import Home from './containers/home/homeContainer';
import Reviews from './containers/reviews/reviewsContainer';
import Signup from './containers/signup/signupContainer';
import Signin from './containers/signin/signinContainer';
import Signout from './containers/signout/signoutContainer';
import ReviewForm from './containers/reviewForm/reviewFormContainer';

import * as reducers from 'redux/modules';
import { AUTH_USER } from './redux/modules/users';

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

// Check if the user is authenticated initially
const token = localStorage.getItem('token');
if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Reviews} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
        <Route path='/create-review' component={ReviewForm} />

        <Route path="*" component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
