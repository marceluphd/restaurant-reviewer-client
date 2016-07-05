import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Main from './containers/main/mainContainer';
import Home from './containers/home/homeContainer';
import Reviews from './containers/reviews/reviewsContainer';
import Signup from './containers/signup/signupContainer';
import Signin from './containers/signin/signinContainer';
import Signout from './containers/signout/signoutContainer';
import ReviewForm from './containers/reviewForm/reviewFormContainer';

render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Reviews} />
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/signout' component={Signout} />
      <Route path='/create-review' component={ReviewForm} />

      <Route path="*" component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
