import { Map } from 'immutable';

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const USERNAME_ERROR = 'USERNAME_ERROR';
const EMAIL_ERROR = 'EMAIL_ERROR';
const PASSWORD_ERROR = 'PASSWORD_ERROR';

// Actions
export function updateUsername (username) {
  return {
    type: UPDATE_USERNAME,
    username
  };
}

export function updateEmail (email) {
  return {
    type: UPDATE_EMAIL,
    email
  };
}

export function updatePassword (password) {
  return {
    type: UPDATE_PASSWORD,
    password
  };
}

// Form Error Actions
export function warnUsernameError() {
  return {
    type: USERNAME_ERROR,
    usernameError: 'Username is required'
  };
}

export function warnEmailError() {
  return {
    type: EMAIL_ERROR,
    emailError: 'Email is required'
  };
}

export function warnPasswordError() {
  return {
    type: PASSWORD_ERROR,
    passwordError: 'Password is required'
  };
}

const initialState = Map({
  username: '',
  email: '',
  password: '',

  usernameError: '',
  emailError: '',
  passwordError: '',
});

// reducer
export default function eventFormReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_USERNAME:
      return state.merge({
        username: action.username,
        usernameError: ''
      });

    case UPDATE_EMAIL:
      return state.merge({
        email: action.email,
        emailError: ''
      });

    case UPDATE_PASSWORD:
      return state.merge({
        password: action.password,
        passwordError: ''
      });
      
    // Form Errors
    case USERNAME_ERROR:
      return state.merge({
        usernameError: action.usernameError,
      });

    case EMAIL_ERROR:
      return state.merge({
        emailError: action.emailError,
      });

    case PASSWORD_ERROR:
      return state.merge({
        passwordError: action.passwordError,
      });

    default:
      return state;
  }
}

