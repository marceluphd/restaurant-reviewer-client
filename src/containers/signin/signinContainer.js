import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/users';
import { labeled, inputField, submitButton } from './style.css'

const SigninContainer = React.createClass({
  handleFormSubmit(e) {
    e.preventDefault();

    this.props.signinUser({
      email: this.refs.email.value,
      password: this.refs.password.value
    });
  },

  render () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <span id="errSignInEmail" className="error"></span>
          <label className={ labeled }>Email<br />
          <input
            id="signInEmail"
            name="signInEmail"
            className={ inputField }
            type="text"
            placeholder="Your Email"
            ref="email"
            required
            autoFocus />
          </label><br />
          
          <span id="errSignInPassword" className="error"></span>
          <label className={ labeled }>Password<br />
          <input
            id="signInPassword"
            name="signInPassword"
            className={ inputField }
            type="password"
            placeholder="Secure Password"
            ref="password"
            required />
          </label>
          
          <button 
            action="submit"
            className={ submitButton }>Sign in!</button>
        </form>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return { errorMessage: state.users.error };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);
