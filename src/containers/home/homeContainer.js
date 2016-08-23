import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'redux/modules/restaurants';
import { Restaurant } from 'components';

const { array, bool, string, func } = PropTypes;

const HomeContainer = React.createClass({
  propTypes: {
    filteredRes: PropTypes.instanceOf(List),
    isFetching: bool.isRequired,
    searchText: string.isRequired,
    searchRestaurants: func.isRequired,
    filterRestaurantsByCategory: func.isRequired,
    fetchRestaurants: func.isRequired,
    error: string.isRequired,
    searchCategory: string.isRequired
  },

  componentDidMount () {
    this.props.fetchRestaurants();
  },

  render () {
    return (
      <Restaurant
        restaurants={ this.props.filteredRes }
        isFetching={ this.props.isFetching }
        error={ this.props.error }
        searchText = { this.props.searchText }
        searchRestaurants={ this.props.searchRestaurants }
        filterRestaurantsByCategory={ this.props.filterRestaurantsByCategory }
        searchCategory={ this.props.searchCategory } />
    );
  }
});

function mapStateToProps ({restaurants}) {
  return {
    filteredRes: restaurants.get('filteredRes'),
    isFetching: restaurants.get('isFetching'),
    error: restaurants.get('error'),
    searchText: restaurants.get('searchText'),
    searchCategory: restaurants.get('searchCategory')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
