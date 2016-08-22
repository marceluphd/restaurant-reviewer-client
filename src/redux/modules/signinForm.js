const UPDATE_SIGNIN_EMAIL = 'UPDATE_SIGNIN_EMAIL';
const UPDATE_SIGNIN_PASSWORD = 'UPDATE_SIGNIN_PASSWORD';
const SIGNIN_EMAIL_ERROR = 'SIGNIN_EMAIL_ERROR';
const SIGNIN_PASSWORD_ERROR = 'SIGNIN_PASSWORD_ERROR';

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

const initialState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

// reducer
export default function eventFormReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_SIGNIN_EMAIL:
      return {
        ...state,
        email: action.email,
        emailError: ''
      };

    case UPDATE_SIGNIN_PASSWORD:
      return {
        ...state,
        password: action.password,
        passwordError: ''
      };
      
    // Form Errors
    case SIGNIN_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.emailError,
      };

    case SIGNIN_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.passwordError,
      };

    default:
      return state;
  }
}

