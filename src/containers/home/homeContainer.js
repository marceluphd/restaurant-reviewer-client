import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/restaurants';
import Restaurant from '../../components/restaurant/restaurant';

const HomeContainer = React.createClass({
  propTypes: {
    restaurants: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  },

  componentDidMount () {
    this.props.fetchRestaurants();
  },

  render () {
    return (
      <main>
        <Restaurant
          restaurants={ this.props.restaurants }
          isFetching={ this.props.isFetching }
          error={ this.props.error } />
      </main>
    );
  }
});

function mapStateToProps({restaurants}) {
  return {
    restaurants: restaurants.restaurants,
    isFetching: restaurants.isFetching,
    error: restaurants.error
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
