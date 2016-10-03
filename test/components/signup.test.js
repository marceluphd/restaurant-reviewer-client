import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import Signup, { SubmitButton } from '../../src/components/signup/signup';

describe('Component: Signup ', () => {
  it('should respond to onChange event on username change', () => {
    let updateEmail = spy();
    let wrapper = shallow(<Signup
      username={ '' }
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
        username='alice'
        email='abc@cc.cc'
        password='password'
        usernameError=''
        emailError=''
        passwordError=''/>
    );
    expect(wrapper.text()).to.equal('Submit');
  });

  it('should display Not Ready if it is not ready', () => {
    const wrapper = shallow(
      <SubmitButton
        username='b'
        email=''
        password='password'
        usernameError=''
        emailError='some error'
        passwordError=''/>
    );
    expect(wrapper.text()).to.equal('Not ready');
  });
});