import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from 'redux/modules/users';
import * as signinFormActions from 'redux/modules/signinForm';
import { Signin } from 'components';

const { func, string } = PropTypes;

const SigninContainer = React.createClass({
  propTypes: {
    signinUser: func.isRequired,
    errorMessage: string.isRequired,

    email: string.isRequired,
    password: string.isRequired,
    emailError: string.isRequired,
    passwordError: string.isRequired,

    updateSigninEmail: func.isRequired,
    updateSigninPassword: func.isRequired,
    warnSigninEmailError: func.isRequired,
    warnSigninPasswordError: func.isRequired
  },

  render () {
    return (
      <Signin 
        signinUser={ this.props.signinUser }
        errorMessage={ this.props.errorMessage }
        email={ this.props.email }
        password={ this.props.password }
        emailError={ this.props.emailError }
        passwordError={ this.props.passwordError }

        updateEmail={ this.props.updateSigninEmail }
        updatePassword={ this.props.updateSigninPassword }
        warnEmailError={ this.props.warnSigninEmailError }
        warnPasswordError={ this.props.warnSigninPasswordError } />
    );
  }
});

function mapStateToProps ({ users, signinForm }) {
  return {
    errorMessage: users.error,
    email: signinForm.email,
    password: signinForm.password,
    emailError: signinForm.emailError,
    passwordError: signinForm.passwordError
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActions,
    ...signinFormActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);