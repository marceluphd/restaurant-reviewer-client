import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/users';

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
        <fieldset className="form-group">
          <label>Username:</label>
          <input className="form-control" ref="username" type="text" />
        </fieldset>

        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" ref="email" />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" ref="password" type="password" />
        </fieldset>

        <button action="submit" className="btn btn-primary">Sign up!</button>
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
