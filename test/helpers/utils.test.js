import { expect } from 'chai';
import * as utils from '../../src/helpers/utils';

describe('[Helpers] checkIfAuthenticated()', () => {
  it('returns false if token is not defined', () => {
    let store = {
      getState: function() {
        this.users = {
          isAuthenticated: false
        };
        return this;
      }
    };
    let token = '';
    expect(utils.checkIfAuthenticated(store, token)).to.be.false;
  });

  it('returns true if the user is authenticated', () => {
    let store = {
      getState: function() {
        this.users = {
          isAuthenticated: true
        };
        return this;
      }
    };
    let token = 'randomtoken';
    expect(utils.checkIfAuthenticated(store, token)).to.be.true;
  });
});

describe('[Helpers] getFormattedDate(rawDate)', () => {
  it('returns formatted date 1', () => {
    expect(utils.getFormattedDate(1005019905043)).to.equal('Nov 05, 2001');
  });

  it('returns formatted date 2', () => {
    expect(utils.getFormattedDate(105019995343)).to.equal('Apr 30, 1973');
  });
});

describe('[Helpers] numToMonth(month)', () => {
  it('returns Jan if month is 1', () => {
    expect(utils.numToMonth(1)).to.equal('Jan');
  });

  it('returns Dec if month is 12', () => {
    expect(utils.numToMonth(12)).to.equal('Dec');
  });
});