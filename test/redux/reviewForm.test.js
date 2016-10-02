import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import * as reviewFormRedux from '../../src/redux/modules/reviewForm';

/**************
 * Actions
 **************/
describe('[Redux] - signinForm: actions', () => {
  it('should create an action when updating comment', () => {
    const comment = 'Taste good!';
    const expectedAction = {
      type: reviewFormRedux.UPDATE_COMMENT,
      comment
    };
    expect(reviewFormRedux.updateComment(comment)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when updating rating', () => {
    const rating = '5';
    const expectedAction = {
      type: reviewFormRedux.UPDATE_RATING,
      rating
    };
    expect(reviewFormRedux.updateRating(rating)).to.deep.equal(expectedAction);
  });
  
  it('should create an action when review form is submitted successfully', () => {
    const expectedAction = {
      type: reviewFormRedux.SUBMITTED_SUCCESSFULLY
    };
    expect(reviewFormRedux.submittedSuccessfully()).to.deep.equal(expectedAction);
  });

  it('should create an action when password is missing', () => {
    const error = 'Unauthorized.';
    const expectedAction = {
      type: reviewFormRedux.SUBMISSION_ERROR,
      error
    };
    expect(reviewFormRedux.submissionError(error)).to.deep.equal(expectedAction);
  });
});

/**************
 * Reducers
 **************/
describe('[Redux] - signinForm: reducers', () => {
  it('should return the initial state', () => {
    expect(
      reviewFormRedux.default(undefined, {})
    ).to.deep.equal(
      Map({
        comment: '',
        rating: '',
        error: ''
      })
    );
  });

  it('should handle UPDATE_COMMENT', () => {
    const comment = 'Taste good!';
    const state = Map({
      comment: '',
      rating: '',
      error: ''
    });

    expect(
      reviewFormRedux.default(state, {
        type: reviewFormRedux.UPDATE_COMMENT,
        comment
      })
    ).to.deep.equal(
      state.merge({
        comment
      })
    );
  });

  it('should handle UPDATE_RATING', () => {
    const rating = '5';
    const state = Map({
      comment: '',
      rating: '',
      error: ''
    });

    expect(
      reviewFormRedux.default(state, {
        type: reviewFormRedux.UPDATE_RATING,
        rating
      })
    ).to.deep.equal(
      state.merge({
        rating
      })
    );
  });

  it('should handle SUBMITTED_SUCCESSFULLY', () => {
    const state = Map({
      comment: '',
      rating: '',
      error: ''
    });

    expect(
      reviewFormRedux.default(state, {
        type: reviewFormRedux.SUBMITTED_SUCCESSFULLY
      })
    ).to.deep.equal(
      state.merge({
        comment: '',
        rating: '',
        error: ''
      })
    );
  });

  it('should handle SUBMISSION_ERROR', () => {
    const error = 'Unauthorized.';
    const state = Map({
      comment: '',
      rating: '',
      error: ''
    });

    expect(
      reviewFormRedux.default(state, {
        type: reviewFormRedux.SUBMISSION_ERROR,
        error
      })
    ).to.deep.equal(
      state.merge({
        error
      })
    );
  });
});