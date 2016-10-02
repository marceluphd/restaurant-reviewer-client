import axios from 'axios';
import { Map } from 'immutable';
import { hashHistory } from 'react-router';
import { ROOT_URL } from '../../config/constants';
import { setHeaders } from '../../helpers/utils';

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_RATING = 'UPDATE_RATING';
export const SUBMITTED_SUCCESSFULLY = 'SUBMITTED_SUCCESSFULLY';
export const SUBMISSION_ERROR = 'SUBMISSION_ERROR';

// Actions
export function updateComment (comment) {
  // console.log('updateComment: ', comment);
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

export function updateRating (rating) {
  return {
    type: UPDATE_RATING,
    rating
  };
}

export function submittedSuccessfully () {
  return {
    type: SUBMITTED_SUCCESSFULLY
  };
}

export function submissionError (error) {
  return {
    type: SUBMISSION_ERROR,
    error
  };
}

const initialState = Map({
  comment: '',
  rating: '',
  error: ''
});

// reducer
export default function reviewFormReducer (state = initialState, action) {
  switch (action.type) {

    case UPDATE_COMMENT:
      return state.merge({
        comment: action.comment
      });

    case UPDATE_RATING:
      return state.merge({
        rating: action.rating
      });

    case SUBMITTED_SUCCESSFULLY:
      return state.merge({
        comment: '',
        rating: '',
        error: ''
      });

    case SUBMISSION_ERROR:
      return state.merge({
        error: action.error
      });

    default:
      return state;
  }
}

// Handlers
export function createReview (restaurantId, comment, rating) {
  // console.log(restaurantId, comment, rating);
  return function (dispatch) {
    axios.post(`${ROOT_URL}/api/reviews/${restaurantId}/create-review`, {comment, rating}, setHeaders())
      .then((res) => {
        // Successfully submitted
        // console.log('[createReview res]', res);
        dispatch(submittedSuccessfully());
        hashHistory.push(`/restaurants/${restaurantId}`);
      })
      .catch((err) => {
        // Got error on submission
        // console.log('[createReview err]', err);
        dispatch(submissionError(err.data.error || err.data));
      });
  };
}
