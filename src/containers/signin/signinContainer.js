import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/users';
// import Signin from '../../components/signin/signin';

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

          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" ref="email" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password:</label>
            <input className="form-control" ref="password" type="password" />
          </fieldset>

          <button action="submit" className="btn btn-primary">Sign in!</button>
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
