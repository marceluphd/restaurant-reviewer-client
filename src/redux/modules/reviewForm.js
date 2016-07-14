import axios from 'axios';
import { hashHistory } from 'react-router';
import { ROOT_URL } from '../../config/constants';
import { setHeaders } from '../../helpers/utils';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_RATING = 'UPDATE_RATING';
const SUBMITTED_SUCCESSFULLY = 'SUBMITTED_SUCCESSFULLY';
const SUBMISSION_ERROR = 'SUBMISSION_ERROR';

// Actions
export function updateComment (comment) {
  // console.log('updateComment: ', comment);
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

export function updateRating (rating) {
  // console.log('updateComment: ', rating);
  return {
    type: UPDATE_RATING,
    rating
  };
}

function submitted_successfully () {
  return {
    type: SUBMITTED_SUCCESSFULLY
  };
}

function submissionError (error) {
  return {
    type: SUBMISSION_ERROR,
    error
  };
}

const initialState = {
  comment: '',
  rating: '',
  error: ''
};

// reducer
export default function reviewFormReducer(state = initialState, action) {
  switch(action.type) {

    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };

    case UPDATE_RATING:
      return {
        ...state,
        rating: action.rating
      };

    case SUBMITTED_SUCCESSFULLY:
      return {
        ...state,
        comment: '',
        rating: '',
        restaurantId: ''
      };

    case SUBMISSION_ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

// Handlers
export function createReview(restaurantId, comment, rating) {
  console.log(restaurantId, comment, rating);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/reviews/${restaurantId}/create-review`, {comment, rating}, setHeaders())
      .then((res) => {
        // Successfully submitted
        // console.log('[createReview res]', res)
        dispatch(submitted_successfully());
        hashHistory.push(`/restaurants/${restaurantId}`);
      })
      .catch((err) => {
        // Got error on submission
        // console.log('[createReview err]', err);
        dispatch(submissionError(err.data.error || err.data))
      });
  }
}
