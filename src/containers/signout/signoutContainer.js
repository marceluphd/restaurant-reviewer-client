import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Signout from '../../components/signout/signout';
import { signoutUser } from '../../redux/modules/users';

const SignoutContainer = React.createClass({
  PropTypes: {
    dispatch: PropTypes.func.isRequired
  },
  
  componentDidMount () {
    this.props.dispatch(signoutUser());
  },

  render () {
    return (
      <Signout />
    );
  }
});

export default connect()(SignoutContainer);
