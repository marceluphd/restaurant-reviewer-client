import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import Signin, { SubmitButton } from '../../src/components/signin/signin';

describe('Component: Signin ', () => {
  it('should respond to onChange event on email change', () => {
    let updateEmail = spy();
    let wrapper = shallow(<Signin
      email={ '' }
      updateEmail={ updateEmail } />);
    wrapper.find('#signUpEmail').simulate('change', {target: {value: 'abc'}});
    expect(updateEmail.calledWith('abc')).to.be.true;
  });
});

describe('Component: SubmitButton ', () => {
  it('should display Submit if it is ready', () => {
    const wrapper = shallow(
      <SubmitButton
        email='abc@cc.cc'
        password='password'
        emailError=''
        passwordError=''/>
    );
    expect(wrapper.text()).to.equal('Submit');
  });

  it('should display Not Ready if it is not ready', () => {
    const wrapper = shallow(
      <SubmitButton
        email=''
        password='password'
        emailError='some error'
        passwordError=''/>
    );
    expect(wrapper.text()).to.equal('Not ready');
  });
});
