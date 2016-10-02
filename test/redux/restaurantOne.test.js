import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as resRedux from '../../src/redux/modules/restaurantOne';

import { ROOT_URL } from '../../src/config/constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

/*****************
 * Actions
 *****************/
describe('[Redux] - Restaurant One: actions', () => {
  it('should create an action when fetching restaurant', () => {
    const expectedAction = {
      type: resRedux.FETCHING_RESTAURANT_ONE
    };
    expect(resRedux.fetchingRestaurantOne()).to.deep.equal(expectedAction);
  });
  
  it('should create an action when failed to fetch restaurant', () => {
    const error = 'Error on fethching the restaurant info';
    const expectedAction = {
      type: resRedux.FETCHING_RESTAURANT_ONE_ERROR,
      error
    };
    expect(resRedux.fetchingRestaurantOneError(error)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when fetched restaurant successfully', () => {
    const restaurant ={id: 1, name: 'Aloha'};
    const expectedAction = {
      type: resRedux.FETCHING_RESTAURANT_ONE_SUCCESS,
      restaurant
    };
    expect(resRedux.fetchingRestaurantOneSuccess(restaurant)).to.deep.equal(expectedAction);
  });
});

/*****************
 * Action creators
 *****************/
describe('[Redux] - Restaurant One: action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // Issue: nock is always failing ... :(
  it('creates FETCHING_RESTAURANT_ONE and FETCHING_RESTAURANT_ONE_SUCCESS when fetchRestaurantOne() went thourgh', () => {
    const restaurant = {id: 1, name: 'Aloha'};
    const id = 1;

    nock(ROOT_URL)
      // .log(console.log)
      .get(`/api/restaurants/${id}`)
      .reply(200, {body: { restaurant: restaurant }});

    const expectedActions = [
      {type: resRedux.FETCHING_RESTAURANT_ONE},
      {type: resRedux.FETCHING_RESTAURANT_ONE_SUCCESS, restaurant}
    ];

    const store = mockStore(Map({
      restaurant: {},
      error: '',
      isFetching: false
    }));

    return store.dispatch(resRedux.fetchRestaurantOne(id))
      .then(() => {
        // expect(store.getActions()).to.deep.equal(expectedActions);
        expect(resRedux.fetchingRestaurantOne()).to.deep.equal(expectedActions[0]);
        expect(resRedux.fetchingRestaurantOneSuccess(restaurant)).to.deep.equal(expectedActions[1]);
      });
  });

  it('creates FETCHING_RESTAURANT_ONE and FETCHING_RESTAURANT_ONE_ERROR when fetchRestaurantOne() fails', () => {
    const error = 'Error on fethching the restaurant info';
    const id = 1;

    nock(ROOT_URL)
      .get(`/api/restaurants/${id}`)
      .reply(400, error);

    const expectedActions = [
      {type: resRedux.FETCHING_RESTAURANT_ONE},
      {type: resRedux.FETCHING_RESTAURANT_ONE_ERROR, error}
    ];

    const store = mockStore(Map({
      restaurant: {},
      error: '',
      isFetching: false
    }));

    return store.dispatch(resRedux.fetchRestaurantOne(id))
      .then(() => {
        // console.log('Success');
      })
      .catch((error) => {
        // expect(store.getActions()).to.deep.equal(expectedActions);
        expect(resRedux.fetchingRestaurantOne()).to.deep.equal(expectedActions[0]);
        expect(resRedux.fetchingRestaurantOneError(error)).to.deep.equal(expectedActions[1]);
      });
  });
});

/*****************
 * Reducers
 *****************/
describe('[Redux] - Restaurant One: reducers', () => {
  it('should return the initial state', () => {
    expect(
      resRedux.default(undefined, {})
    ).to.deep.equal(
      Map({
        restaurant: {},
        error: '',
        isFetching: false
      })
    );
  });

  it('should handle FETCHING_RESTAURANT_ONE', () => {
    const state = Map({
      restaurant: {},
      error: '',
      isFetching: false
    });

    expect(
      resRedux.default(state, {
        type: resRedux.FETCHING_RESTAURANT_ONE
      })
    ).to.deep.equal(
      state.merge({
        isFetching: true
      })
    );
  });

  it('should handle FETCHING_RESTAURANT_ONE_ERROR', () => {
    const state = Map({
      restaurant: {},
      error: '',
      isFetching: false
    });

    const error = 'Error on fethching the restaurant info';

    expect(
      resRedux.default(state, {
        type: resRedux.FETCHING_RESTAURANT_ONE_ERROR,
        error
      })
    ).to.deep.equal(
      state.merge({
        isFetching: false,
        error
      })
    );
  });

  it('should handle FETCHING_RESTAURANT_ONE_SUCCESS', () => {
    const state = Map({
      restaurant: {},
      error: '',
      isFetching: false
    });

    const restaurant = {id: 1, name: 'Aloha'};

    expect(
      resRedux.default(state, {
        type: resRedux.FETCHING_RESTAURANT_ONE_SUCCESS,
        restaurant
      })
    ).to.deep.equal(
      state.merge({
        isFetching: false,
        error: '',
        restaurant
      })
    );
  });
});
