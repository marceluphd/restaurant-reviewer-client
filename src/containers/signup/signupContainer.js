import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/users';
import { labeled, inputField, submitButton } from './style.css'

const SignupContainer = React.createClass({
  handleFormSubmit(e) {
    e.preventDefault();

    this.props.signupUser({
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  },

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
         <span id="errSignUpUsername" className="error"></span>
          <label className={ labeled }>Username<br />
          <input
            id="signUpUsername"
            name="signUpUsername"
            className={ inputField }
            type="text"
            placeholder="Your Username"
            ref="username"
            required
            autoFocus />
          </label><br />

         <span id="errSignUpEmail" className="error"></span>
          <label className={ labeled }>Email<br />
          <input
            id="signUpEmail"
            name="signUpEmail"
            className={ inputField }
            type="text"
            placeholder="Your Email"
            ref="email"
            required />
          </label><br />
          
          <span id="errSignUpPassword" className="error"></span>
          <label className={ labeled }>Password<br />
          <input
            id="signUpPassword"
            name="signUpPassword"
            className={ inputField }
            type="password"
            placeholder="Secure Password"
            ref="password"
            required />
          </label>
          
          <button 
            action="submit"
            className={ submitButton }>Sign Up!</button>
      </form>
    );
  }
});

function mapStateToProps(state) {
  return { errorMessage: state.users.error };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
