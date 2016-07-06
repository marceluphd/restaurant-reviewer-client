const ROOT_URL = 'http://localhost:3000';

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const AUTH_ERROR = 'AUTH_ERROR';
const FETCHING_USER = 'FETCHING_USER';
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';



function authenticateUser() {
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

function fetchingUser() {
  return {
    type: FETCHING_USER
  };
}

function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.'
  };
}

function fetchingUserSuccess (user) {
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
  authedId: '',
};

export default function users(state = initialState, action) {
  switch(action.type) {

    case AUTH_USER :
      return {
        ...state,
        isAuthenticated: true,
        authedId: action.uid
      };

    case UNAUTH_USER :
      return {
        ...state,
        isAuthenticated: false,
        authedId: ''
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
          user: user(null, action)
        };

    default:
      return state;
  }
}

const initialUserState = {
  username: '',
  email: ''
};

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        username: action.user.username,
        email: action.user.email
      };
    default :
      return state;
  }
}
