import axios from 'axios';
import { hashHistory } from 'react-router';

// export const ROOT_URL = 'http://localhost:3000';
import { ROOT_URL } from '../../config/constants';

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const AUTH_ERROR = 'AUTH_ERROR';
const FETCHING_USER = 'FETCHING_USER';
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';

// Actions
export function authenticateUser() {
  return {
    type: AUTH_USER
  }
}

export function authenticationError(error) {
  return {
    type: AUTH_ERROR,
    error
  };
};

export function fetchingUser() {
  return {
    type: FETCHING_USER
  };
}

export function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.'
  };
}

export function fetchingUserSuccess (user) {
  return {
    type: FETCHING_USER_SUCCESS,
    user
  };
}

function unauthUser() {
  return {
    type: UNAUTH_USER
  };
}



const initialState = {
  isFetching: false,
  error: '',
  isAuthenticated: false,
  authedUser: {},
};

// Users reducer
export default function usersReducer(state = initialState, action) {
  switch(action.type) {

    case AUTH_USER :
      return {
        ...state,
        isAuthenticated: true,
        authedUser: action.user
      };

    case UNAUTH_USER :
      return {
        ...state,
        isAuthenticated: false,
        authedUser: {}
      };

    case AUTH_ERROR :
      return {
        ...state,
        error: action.error
      };

    case FETCHING_USER:
      return {
        ...state,
        isFetching: true
      };

    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: ''
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          authedUser: action.user
        };

    default:
      return state;
  }
}

export function signoutUser() {
  return function(dispatch) {
    localStorage.removeItem('token');
    dispatch(unauthUser());
  };
}


export function signupUser({username, email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/users`, {username, email, password})
      .then((res) => {
        // If request is correct
        // Update the state (authenticated)
        dispatch(authenticateUser());
        // Save JWT Token in localStorage
        console.log('Authed ', res.data);
        localStorage.setItem('token', res.data.token);
        // Redirect user after authenticated
        dispatch(fetchingUserSuccess(res.data.user))
        // Redirect user to '/create-review' page
        hashHistory.push('/create-review');
      })
      .catch((err) => {
        console.log('[signiupUser err]', err);
        // If request is incorrect
        // Show user the error
        dispatch(authenticationError(err.data.error || err.data));
      });
  }
}


export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/signin`, {email, password})
      .then((res) => {
        // If request is correct
        // Update the state (authenticated)
        dispatch(authenticateUser());
        // Save JWT Token in localStorage
        // console.log('Authed ', res.data);
        localStorage.setItem('token', res.data.token);
        // Redirect user after authenticated
        dispatch(fetchingUserSuccess(res.data.user))
        hashHistory.push('/create-review');
      })
      .catch((err) => {
        console.log('[signinUser err]', err);
        // If request is incorrect
        // Show user the error
        dispatch(authenticationError(err.data.error || err.data));
      });
  }
}
