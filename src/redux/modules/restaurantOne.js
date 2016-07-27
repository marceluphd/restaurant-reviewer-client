import axios from 'axios';
import { ROOT_URL } from '../../config/constants';

const FETCHING_RESTAURANT_ONE = 'FETCHING_RESTAURANT_ONE';
const FETCHING_RESTAURANT_ONE_ERROR = 'FETCHING_RESTAURANT_ONE_ERROR';
const FETCHING_RESTAURANT_ONE_SUCCESS = 'FETCHING_RESTAURANT_ONE_SUCCESS';

function fetchingRestaurantOne () {
  return {
    type: FETCHING_RESTAURANT_ONE
  };
}

function fetchingRestaurantOneError (error) {
  return {
    type: FETCHING_RESTAURANT_ONE_ERROR,
    error
  };
}

function fetchingRestaurantOneSuccess (restaurant) {
  return {
    type: FETCHING_RESTAURANT_ONE_SUCCESS,
    restaurant
  };
}

export function fetchRestaurantOne (id) {
  return function (dispatch) {
    dispatch(fetchingRestaurantOne());
    axios.get(`${ROOT_URL}/api/restaurants/${id}`)
      .then((res) => {
        dispatch(fetchingRestaurantOneSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchingRestaurantOneError(err));
      });
  };
}

// export function fetchRestaurantOneBasic(id) {
//   return function(dispatch) {
//     dispatch(fetchingRestaurantOne());
//     axios.get(`${ROOT_URL}/api/restaurants/${id}/create-review`)
//       .then((res) => {
//         dispatch(fetchingRestaurantOneSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(fetchingRestaurantOneError(err));
//       });
//   };
// }

const initialState = {
  restaurant: {},
  error: '',
  isFetching: false
};

export default function restaurantOne (state = initialState, action) {
  switch (action.type) {

    case FETCHING_RESTAURANT_ONE :
      return {
        ...state,
        isFetching: true
      };

    case FETCHING_RESTAURANT_ONE_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case FETCHING_RESTAURANT_ONE_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        restaurant: action.restaurant
      };

    default :
      return state;
  }
}
