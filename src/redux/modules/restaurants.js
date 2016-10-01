import axios from 'axios';
import { fromJS } from 'immutable';
import { ROOT_URL } from '../../config/constants';

const FETCHING_RESTAURANTS = 'FETCHING_RESTAURANTS';
const FETCHING_RESTAURANTS_ERROR = 'FETCHING_RESTAURANTS_ERROR';
const FETCHING_RESTAURANTS_SUCCESS = 'FETCHING_RESTAURANTS_SUCCESS';
const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS';
const FILTER_RESTAURANTS_CATEGORY = 'FILTER_RESTAURANTS_CATEGORY';

function fetchingRestaurants () {
  return {
    type: FETCHING_RESTAURANTS
  };
}

function fetchingRestaurantsError (error) {
  return {
    type: FETCHING_RESTAURANTS_ERROR,
    error
  };
}

function fetchingRestaurantsSuccess (restaurants) {
  return {
    type: FETCHING_RESTAURANTS_SUCCESS,
    restaurants
  };
}

export function searchRestaurants (searchText) {
  return {
    type: SEARCH_RESTAURANTS,
    searchText
  };
}

export function filterRestaurantsByCategory (searchCategory) {
  return {
    type: FILTER_RESTAURANTS_CATEGORY,
    searchCategory
  };
}

export function fetchRestaurants () {
  return function (dispatch) {
    dispatch(fetchingRestaurants());
    axios.get(`${ROOT_URL}/api/restaurants`)
      .then((res) => {
        dispatch(fetchingRestaurantsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchingRestaurantsError(err));
      });
  };
}

function getFilteredRestaurants (restaurants, searchText, searchCategory) {
  if (searchText) {
    return restaurants.filter((r) => {
      return (r.get('name').toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
    });
  }

  if (searchCategory && searchCategory !== 'default') {
    return restaurants.filter((r) => {
      return (r.get('category').toLowerCase().indexOf(searchCategory.toLowerCase()) >= 0);
    });
  }

  return restaurants;
}

const initialState = fromJS({
  restaurants: [],
  error: '',
  isFetching: false,
  searchText: '',
  searchCategory: 'default',
  filteredRes: []
});

export default function restaurants (state = initialState, action) {
  switch (action.type) {

    case FETCHING_RESTAURANTS :
      return state.merge({
        isFetching: true
      });

    case FETCHING_RESTAURANTS_ERROR :
      return state.merge({
        isFetching: false,
        error: action.error
      });

    case FETCHING_RESTAURANTS_SUCCESS :
      return state.merge({
        isFetching: false,
        error: '',
        restaurants: action.restaurants,
        filteredRes: action.restaurants
      });

    case SEARCH_RESTAURANTS :
      return state.merge({
        searchText: action.searchText,
        searchCategory: 'default',
        filteredRes: getFilteredRestaurants(state.get('restaurants'), action.searchText, null)
      });

    case FILTER_RESTAURANTS_CATEGORY :
      return state.merge({
        searchCategory: action.searchCategory,
        searchText: '',
        filteredRes: getFilteredRestaurants(state.get('restaurants'), null, action.searchCategory)
      });

    default :
      return state;
  }
}
