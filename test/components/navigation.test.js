import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Nav, { Links } from '../../src/components/navigation/navigation';

describe('Component: Nav (when authenticated)', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<Links isAuthenticated={true} />);
  });

  it('has <nav>', () => {
    const wrapper = shallow(<Nav isAuthenticated={true} />);
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('has 1 <Link /> element', () => {
    expect(wrapper.find('Link')).to.have.length(1);
  });

  it('has <Link to="signout" > ', () => {
    expect(wrapper.find('Link').at(0).prop('to')).to.equal('/signout');
  });
  
});

describe('Component: Nav (when unauthenticated)', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<Links isAuthenticated={false} />);
  });

  it('has 2 <Link /> elements', () => {
    expect(wrapper.find('Link')).to.have.length(2);
  });

  it('has <Link to="signup" > ', () => {
    expect(wrapper.find('Link').at(1).prop('to')).to.equal('/signin');
  });
});