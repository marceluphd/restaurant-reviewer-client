import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as usersActions from 'redux/modules/users';
import * as signupFormActions from 'redux/modules/signupForm';
import { Signup } from 'components';

const { func, string } = PropTypes;

const SignupContainer = React.createClass({
  propTypes: {
    signupUser: func.isRequired,
    errorMessage: string.isRequired,
    username: string.isRequired,
    email: string.isRequired,
    password: string.isRequired,
    usernameError: string.isRequired,
    emailError: string.isRequired,
    passwordError: string.isRequired,
    updateUsername: func.isRequired,
    updateEmail: func.isRequired,
    updatePassword: func.isRequired,
    warnUsernameError: func.isRequired,
    warnEmailError: func.isRequired,
    warnPasswordError: func.isRequired
  },

  render () {
    return (
      <Signup 
        signupUser={ this.props.signupUser }
        errorMessage={ this.props.errorMessage }
        username={ this.props.username }
        email={ this.props.email }
        password={ this.props.password }
        usernameError={ this.props.usernameError }
        emailError={ this.props.emailError }
        passwordError={ this.props.passwordError }
        updateUsername={ this.props.updateUsername }
        updateEmail={ this.props.updateEmail }
        updatePassword={ this.props.updatePassword }
        warnUsernameError={ this.props.warnUsernameError }
        warnEmailError={ this.props.warnEmailError }
        warnPasswordError={ this.props.warnPasswordError } />
    );
  }
});

function mapStateToProps ({ users, signupForm }) {
  return {
    errorMessage: users.get('error'),
    username: signupForm.get('username'),
    email: signupForm.get('email'),
    password: signupForm.get('password'),
    usernameError: signupForm.get('usernameError'),
    emailError: signupForm.get('emailError'),
    passwordError: signupForm.get('passwordError')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActions,
    ...signupFormActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
