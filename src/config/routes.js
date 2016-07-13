import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../containers/main/mainContainer';
import Home from '../containers/home/homeContainer';
import Reviews from '../containers/reviews/reviewsContainer';
import Signup from '../containers/signup/signupContainer';
import Signin from '../containers/signin/signinContainer';
import Signout from '../containers/signout/signoutContainer';
import ReviewForm from '../containers/reviewForm/reviewFormContainer';
import RestaurantOne from '../containers/RestaurantOne/RestaurantOneContainer';

export default function getRoutes(checkAuthentication) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/signout' component={Signout} />
        <Route path='/restaurants/:id' component={RestaurantOne} /> 
        <Route path='/restaurants/:id/create-review' component={ReviewForm} onEnter={checkAuthentication}/>

        <Route path="*" component={Home}/>
      </Route>
    </Router>
  );
}
