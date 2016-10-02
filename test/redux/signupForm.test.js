import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import * as signupRedux from '../../src/redux/modules/signupForm';

describe('[Redux] - signupForm: actions', () => {
  it('should create an action when updating the username', () => {
    const username = 'alice';
    const expectedAction = {
      type: signupRedux.UPDATE_USERNAME,
      username
    };
    expect(signupRedux.updateUsername(username)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when updating the email', () => {
    const email = 'some@email.com';
    const expectedAction = {
      type: signupRedux.UPDATE_EMAIL,
      email
    };
    expect(signupRedux.updateEmail(email)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when fetching the user', () => {
    const password = 'Somepassword';
    const expectedAction = {
      type: signupRedux.UPDATE_PASSWORD,
      password
    };
    expect(signupRedux.updatePassword(password)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when username is missing', () => {
    const expectedAction = {
      type: signupRedux.USERNAME_ERROR,
      usernameError: 'Username is required'
    };
    expect(signupRedux.warnUsernameError()).to.deep.equal(expectedAction);
  });
  
  it('should create an action when email is missing', () => {
    const expectedAction = {
      type: signupRedux.EMAIL_ERROR,
      emailError: 'Email is required'
    };
    expect(signupRedux.warnEmailError()).to.deep.equal(expectedAction);
  });

  it('should create an action when password is missing', () => {
    const expectedAction = {
      type: signupRedux.PASSWORD_ERROR,
      passwordError: 'Password is required'
    };
    expect(signupRedux.warnPasswordError()).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - signupForm: reducers', () => {
  it('should return the initial state', () => {
    expect(
      signupRedux.default(undefined, {})
    ).to.deep.equal(
      Map({
        username: '',
        email: '',
        password: '',
        usernameError: '',
        emailError: '',
        passwordError: ''
      })
    );
  });
  
  it('should handle UPDATE_USERNAME', () => {
    const username = 'alice';

    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.UPDATE_USERNAME,
        username
      })
    ).to.deep.equal(
      state.merge({
        username,
        usernameError: ''
      })
    );
  });

  it('should handle UPDATE_EMAIL', () => {
    const email = 'asdds';
    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.UPDATE_EMAIL,
        email
      })
    ).to.deep.equal(
      state.merge({
        email,
        emailError: ''
      })
    );
  });

  it('should handle UPDATE_PASSWORD', () => {
    const password = 'pass';
    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.UPDATE_PASSWORD,
        password
      })
    ).to.deep.equal(
      state.merge({
        password,
        passwordError: ''
      })
    );
  });

  it('should handle USERNAME_ERROR', () => {
    const usernameError = 'Username is required';
    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.USERNAME_ERROR,
        usernameError
      })
    ).to.deep.equal(
      state.merge({
        usernameError
      })
    );
  });

  it('should handle EMAIL_ERROR', () => {
    const emailError = 'Email is required';
    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.EMAIL_ERROR,
        emailError
      })
    ).to.deep.equal(
      state.merge({
        emailError
      })
    );
  });

  it('should handle PASSWORD_ERROR', () => {
    const passwordError = 'Password is required';
    const state = Map({
      username: '',
      email: '',
      password: '',
      usernameError: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signupRedux.default(state, {
        type: signupRedux.PASSWORD_ERROR,
        passwordError
      })
    ).to.deep.equal(
      state.merge({
        passwordError
      })
    );
  });
});