import { Map } from 'immutable';

export const UPDATE_SIGNIN_EMAIL = 'UPDATE_SIGNIN_EMAIL';
export const UPDATE_SIGNIN_PASSWORD = 'UPDATE_SIGNIN_PASSWORD';
export const SIGNIN_EMAIL_ERROR = 'SIGNIN_EMAIL_ERROR';
export const SIGNIN_PASSWORD_ERROR = 'SIGNIN_PASSWORD_ERROR';

// Actions
export function updateSigninEmail (email) {
  return {
    type: UPDATE_SIGNIN_EMAIL,
    email
  };
}

export function updateSigninPassword (password) {
  return {
    type: UPDATE_SIGNIN_PASSWORD,
    password
  };
}

// Form Error Actions
export function warnSigninEmailError() {
  return {
    type: SIGNIN_EMAIL_ERROR,
    emailError: 'Email is required'
  };
}

export function warnSigninPasswordError() {
  return {
    type: SIGNIN_PASSWORD_ERROR,
    passwordError: 'Password is required'
  };
}

const initialState = Map({
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
});

// reducer
export default function eventFormReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_SIGNIN_EMAIL:
      return state.merge({
        email: action.email,
        emailError: ''
      });

    case UPDATE_SIGNIN_PASSWORD:
      return state.merge({
        password: action.password,
        passwordError: ''
      });
      
    // Form Errors
    case SIGNIN_EMAIL_ERROR:
      return state.merge({
        emailError: action.emailError,
      });

    case SIGNIN_PASSWORD_ERROR:
      return state.merge({
        passwordError: action.passwordError,
      });

    default:
      return state;
  }
}

