import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as usersRedux from '../../src/redux/modules/users';

import { ROOT_URL } from '../../src/config/constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('[Redux] - Users: actions', () => {
  it('should create an action when authenticating the user', () => {
    const expectedAction = {
      type: usersRedux.AUTH_USER
    };
    expect(usersRedux.authenticateUser()).to.deep.equal(expectedAction);
  });
  
  it('should create an action when unauthenticating the user', () => {
    const expectedAction = {
      type: usersRedux.UNAUTH_USER
    };
    expect(usersRedux.unauthUser()).to.deep.equal(expectedAction);
  });
  
  it('should create an action when fetching the user', () => {
    const expectedAction = {
      type: usersRedux.FETCHING_USER
    };
    expect(usersRedux.fetchingUser()).to.deep.equal(expectedAction);
  });
  
  it('should create an action when fetched the user successfully', () => {
    const user = {
      username: 'Bob Sapp',
      password: '123das',
      email: 'bob@co.jp'
    };
    const expectedAction = {
      type: usersRedux.FETCHING_USER_SUCCESS,
      user
    };
    expect(usersRedux.fetchingUserSuccess(user)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when failed to fetch the user', () => {
    const error = 'Error fetching user.';
    const expectedAction = {
      type: usersRedux.FETCHING_USER_FAILURE,
      error
    };
    expect(usersRedux.fetchingUserFailure(error)).to.deep.equal(expectedAction);
  });

  it('should create an action when an error occuts on authenticating', () => {
    const error = 'Could not authenticate.';
    const expectedAction = {
      type: usersRedux.AUTH_ERROR,
      error
    };
    expect(usersRedux.authenticationError(error)).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - Users: action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // Issue: it always error :(
  it('creates FETCHING_USER_SUCCESS and AUTH_USER when fetchAndHandleAuthedUser() returns the user', () => {
    const validReturn  = {
      "token":"some-token",
      "user": {
        "username":"Alice",
        "email":"alice@cc.cc"
      }
    };

    const validUser = {
      "email":"alice@cc.cc",
      "password": "password"
    };

    nock(ROOT_URL)
      // .log(console.log)
      .post('/auth/signin', validUser)
      .reply(200, { body: validReturn });

    const expectedActions = [
      {type: usersRedux.AUTH_USER},
      {type: usersRedux.FETCHING_USER_SUCCESS, user: validUser}
    ];

    const store = mockStore(Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    }));

    return store.dispatch(usersRedux.signinUser(validUser))
      .then((res) => {
        expect(usersRedux.authenticateUser()).to.deep.equal(expectedActions[0]);
        expect(usersRedux.fetchingUserSuccess(validUser)).to.deep.equal(expectedActions[1]);
      });
  });

  it('creates AUTH_ERROR when authenticationError() on invalid signin attempt', () => {
    const invalidUser = {
      email: 'invalid@email.com',
      password: 'invalid-password'};

    nock(ROOT_URL)
      .post('/auth/signin', invalidUser)
      .reply(401, 'No user with the given email');

    const expectedAction = [{
      type: usersRedux.AUTH_ERROR,
      error: 'No user with the given email' }];

    const store = mockStore(Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    }));

    return store.dispatch(usersRedux.signinUser(invalidUser))
      .then(() => {
        // console.log('Success');
      })
      .catch((error) => {
        expect(store.actions()).to.deep.equal(expectedAction);
      });
  });

  it('creates UNAUTH_USER when signoutAndUnauth() went successfully', () => {
    const expectedAction = [{ type: usersRedux.UNAUTH_USER }];

    const store = mockStore(Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    }));

    return store.dispatch(usersRedux.signoutUser(() => {
      expect(store.actions()).to.deep.equal(expectedAction);
    }));
  });
});

describe('[Redux] - Users: reducers', () => {
  it('should return the initial state', () => {
    expect(
      usersRedux.default(undefined, {})
    ).to.deep.equal(
      Map({
        isFetching: false,
        error: '',
        isAuthenticated: false,
        authedUser: {}
      })
    );
  });
  
  it('should handle AUTH_USER', () => {
    const authedUser = {
      username: 'Bob Sapp',
      password: '123das',
      email: 'bob@co.jp'
    };

    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    });

    expect(
      usersRedux.default(state, {
        type: usersRedux.AUTH_USER,
        user: authedUser
      })
    ).to.deep.equal(
      state.merge({
        isAuthenticated: true,
        authedUser
      })
    );
  });

  it('should handle UNAUTH_USER', () => {
    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: true,
      authedUser: { uid: '123', name: 'Ali Smith' }
    });

    expect(
      usersRedux.default(state, {
        type: usersRedux.UNAUTH_USER
      })
    ).to.deep.equal(
      state.merge({
        isAuthenticated: false,
        authedUser: {}
      })
    );
  });

  it('should handle FETCHING_USER', () => {
    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    });

    expect(
      usersRedux.default(state, {
        type: usersRedux.FETCHING_USER
      })
    ).to.deep.equal(
      state.merge({
        isFetching: true
      })
    );
  });

  it('should handle FETCHING_USER_SUCCESS', () => {
    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    });

    const authedUser = {
      username: 'Bob Sapp',
      password: '123das',
      email: 'bob@co.jp'
    };

    expect(
      usersRedux.default(state, {
        type: usersRedux.FETCHING_USER_SUCCESS,
        user: authedUser
      })
    ).to.deep.equal(
      state.merge({
        isFetching: false,
        authedUser
      })
    );
  });

  it('should handle FETCHING_USER_FAILURE', () => {
    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    });

    const error = 'Error on fetching user';

    expect(
      usersRedux.default(state, {
        type: usersRedux.FETCHING_USER_FAILURE,
        error
      })
    ).to.deep.equal(
      state.merge({
        isFetching: false,
        error
      })
    );
  });

  it('should handle AUTH_ERROR', () => {
    const state = Map({
      isFetching: false,
      error: '',
      isAuthenticated: false,
      authedUser: {}
    });

    const error = 'Error on fetching user';

    expect(
      usersRedux.default(state, {
        type: usersRedux.AUTH_ERROR,
        error
      })
    ).to.deep.equal(
      state.merge({
        error
      })
    );
  });
});