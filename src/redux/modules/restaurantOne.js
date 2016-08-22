import axios from 'axios';
import { Map } from 'immutable';
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
  console.dir('Error', error)
  return {
    type: FETCHING_RESTAURANT_ONE_ERROR,
    error: 'Error on fethching the restaurant info'
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

const initialState = Map({
  restaurant: {},
  error: '',
  isFetching: false
});

export default function restaurantOne (state = initialState, action) {
  switch (action.type) {

    case FETCHING_RESTAURANT_ONE :
      return state.merge({
        isFetching: true
      });

    case FETCHING_RESTAURANT_ONE_ERROR :
      return state.merge({
        isFetching: false,
        error: action.error
      });

    case FETCHING_RESTAURANT_ONE_SUCCESS :
      return state.merge({
        isFetching: false,
        error: '',
        restaurant: action.restaurant
      });

    default :
      return state;
  }
}
