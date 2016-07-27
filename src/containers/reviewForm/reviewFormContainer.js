import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReviewForm from '../../components/reviewForm/reviewForm';
import * as actions from '../../redux/modules/reviewForm';
import * as rActions from '../../redux/modules/restaurantOne';

const ReviewFormContainer = React.createClass({
  propTypes: {
    comment: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    updateComment: PropTypes.func.isRequired,
    updateRating: PropTypes.func.isRequired,
    createReview: PropTypes.func.isRequired
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
    restaurant: restaurantOne.restaurant,
    isFetching: restaurantOne.isFetching,
    fetchError: restaurantOne.error,
    comment: reviewForm.comment,
    rating: reviewForm.rating,
    error: reviewForm.error
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...actions, ...rActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewFormContainer);
