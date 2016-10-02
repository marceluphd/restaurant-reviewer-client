import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import * as signinRedux from '../../src/redux/modules/signinForm';

describe('[Redux] - signinForm: actions', () => {
  it('should create an action when updating the email', () => {
    const email = 'some@email.com';
    const expectedAction = {
      type: signinRedux.UPDATE_SIGNIN_EMAIL,
      email
    };
    expect(signinRedux.updateSigninEmail(email)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when fetching the user', () => {
    const password = 'Somepassword';
    const expectedAction = {
      type: signinRedux.UPDATE_SIGNIN_PASSWORD,
      password
    };
    expect(signinRedux.updateSigninPassword(password)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when email is missing', () => {
    const expectedAction = {
      type: signinRedux.SIGNIN_EMAIL_ERROR,
      emailError: 'Email is required'
    };
    expect(signinRedux.warnSigninEmailError()).to.deep.equal(expectedAction);
  });

  it('should create an action when password is missing', () => {
    const expectedAction = {
      type: signinRedux.SIGNIN_PASSWORD_ERROR,
      passwordError: 'Password is required'
    };
    expect(signinRedux.warnSigninPasswordError()).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - signinForm: reducers', () => {
  it('should return the initial state', () => {
    expect(
      signinRedux.default(undefined, {})
    ).to.deep.equal(
      Map({
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
      })
    );
  });

  it('should handle UPDATE_SIGNIN_EMAIL', () => {
    const email = 'asdds';
    const state = Map({
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signinRedux.default(state, {
        type: signinRedux.UPDATE_SIGNIN_EMAIL,
        email
      })
    ).to.deep.equal(
      state.merge({
        email,
        emailError: ''
      })
    );
  });

  it('should handle UPDATE_SIGNIN_PASSWORD', () => {
    const password = 'pass';
    const state = Map({
      username: '',
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signinRedux.default(state, {
        type: signinRedux.UPDATE_SIGNIN_PASSWORD,
        password
      })
    ).to.deep.equal(
      state.merge({
        password,
        passwordError: ''
      })
    );
  });

  it('should handle SIGNIN_EMAIL_ERROR', () => {
    const emailError = 'Email is required';
    const state = Map({
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signinRedux.default(state, {
        type: signinRedux.SIGNIN_EMAIL_ERROR,
        emailError
      })
    ).to.deep.equal(
      state.merge({
        emailError
      })
    );
  });

  it('should handle SIGNIN_PASSWORD_ERROR', () => {
    const passwordError = 'Password is required';
    const state = Map({
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    });

    expect(
      signinRedux.default(state, {
        type: signinRedux.SIGNIN_PASSWORD_ERROR,
        passwordError
      })
    ).to.deep.equal(
      state.merge({
        passwordError
      })
    );
  });
});