import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/modules/restaurants';
import Restaurant from '../../components/restaurant/restaurant';

const HomeContainer = React.createClass({
  propTypes: {
    filteredRes: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    searchText: PropTypes.string.isRequired,
    searchRestaurants: PropTypes.func.isRequired,
    filterRestaurantsByCategory: PropTypes.func.isRequired
  },

  componentDidMount () {
    this.props.fetchRestaurants();
  },

  render () {
    return (
      <main>
        <Restaurant
          restaurants={ this.props.filteredRes }
          isFetching={ this.props.isFetching }
          error={ this.props.error }
          searchText = { this.props.searchText }
          searchRestaurants={ this.props.searchRestaurants }
          filterRestaurantsByCategory={ this.props.filterRestaurantsByCategory }
          searchCategory={ this.props.searchCategory } />
      </main>
    );
  }
});

function mapStateToProps({restaurants}) {
  return {
    filteredRes: restaurants.filteredRes,
    isFetching: restaurants.isFetching,
    error: restaurants.error,
    searchText: restaurants.searchText,
    searchCategory: restaurants.searchCategory
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
