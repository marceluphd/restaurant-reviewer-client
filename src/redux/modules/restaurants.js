import axios from 'axios';
import { ROOT_URL } from '../../config/constants';
import { setHeaders } from '../../helpers/utils';

const FETCHING_RESTAURANTS = 'FETCHING_RESTAURANTS';
const FETCHING_RESTAURANTS_ERROR = 'FETCHING_RESTAURANTS_ERROR';
const FETCHING_RESTAURANTS_SUCCESS = 'FETCHING_RESTAURANTS_SUCCESS';
const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

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

export function filterRestaurants (searchText) {
  return {
    type: FILTER_RESTAURANTS,
    searchText
  };
}



export function fetchRestaurants() {
  return function(dispatch) {
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

function getFilteredRestaurants(restaurants, searchText) {  
  if (!searchText) return restaurants;

  return restaurants.filter((r) => {
    return (r.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0);
  });
}

const initialState = {
  restaurants: [],
  error: '',
  isFetching: false,
  searchText: '',
  filteredRes: []
};

export default function restaurants (state = initialState, action) {
  switch (action.type) {

    case FETCHING_RESTAURANTS :
      return {
        ...state,
        isFetching: true
      };

    case FETCHING_RESTAURANTS_ERROR :
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case FETCHING_RESTAURANTS_SUCCESS :
      return {
        ...state,
        isFetching: false,
        error: '',
        restaurants: action.restaurants,
        filteredRes: action.restaurants
      };
    
    case FILTER_RESTAURANTS :
      return {
        ...state,
        searchText: action.searchText,
        filteredRes: getFilteredRestaurants(state.restaurants, action.searchText)
      }

    default :
      return state;
  }
}
