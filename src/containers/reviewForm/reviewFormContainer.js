import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ReviewForm } from 'components';
import * as actions from 'redux/modules/reviewForm';
import * as rActions from 'redux/modules/restaurantOne';

const { object, bool, string, func } = PropTypes;

const ReviewFormContainer = React.createClass({
  propTypes: {
    comment: string.isRequired,
    rating: string.isRequired,
    updateComment: func.isRequired,
    updateRating: func.isRequired,
    createReview: func.isRequired,
    fetchRestaurantOne: func.isRequired,
    error: string.isRequired,
    params: object.isRequired,
    restaurant: object.isRequired,
    isFetching: bool.isRequired,
    fetchError: string.isRequired
  },

  componentDidMount () {
    this.props.fetchRestaurantOne(this.props.params.id);
  },

  render () {
    return (
      <ReviewForm
        restaurant= { this.props.restaurant }
        isFetching= { this.props.isFetching }
        fetchError= { this.props.fetchError }
        createReview= { this.props.createReview }
        restaurantId={ this.props.params.id }
        comment={ this.props.comment }
        rating={ this.props.rating }
        updateComment={ this.props.updateComment }
        updateRating={ this.props.updateRating }
        error={ this.props.error }/>
    );
  }
});

function mapStateToProps ({restaurantOne, reviewForm}) {
  return {
    restaurant: restaurantOne.get('restaurant'),
    isFetching: restaurantOne.get('isFetching'),
    fetchError: restaurantOne.get('error'),
    comment: reviewForm.get('comment'),
    rating: reviewForm.get('rating'),
    error: reviewForm.get('error')
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...actions, ...rActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewFormContainer);
