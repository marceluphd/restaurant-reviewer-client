import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Signup, { SubmitButton } from '../../src/components/signup/signup';

describe('Component: Signup ', () => {
  it('should display the form');
  it('should respond to onChange event on input change');
});

describe('Component: SubmitButton ', () => {
  it('should display Submit if it is ready');
  it('should display Not Ready if it is not ready');
});