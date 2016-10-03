import React from 'react';
import { Map } from 'immutable';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow } from 'enzyme';
import ReviewForm from '../../src/components/reviewForm/reviewForm';

describe('Component: ReviewForm ', () => {

  const restaurant = Map({
    _id: '123',
    photo: 'www.whatever.com/photo.jpeg',
    name: 'Sushi Bar',
    category: 'Japanese',
    address: '123 ABC Street',
    total_ratings: 5,
    reviews: [{ id: '111', comment: 'come comment', rating: 5}],
    hours: {
      mon_start: 8,
      mon_end: 20,
      tue_start: 8,
      tue_end: 20,
      wed_start: 8,
      wed_end: 20,
      thu_start: 8,
      thu_end: 20,
      fri_start: 8,
      fri_end: 20,
      sat_start: 8,
      sat_end: 20,
      sun_start: 8,
      sun_end: 20,
      get(name) {
        return this[name]
      }
    },
    get(name) {
      return this[name];
    }
  });

  it('should display Fetching when fetching the data', () => {
    let wrapper = shallow(<ReviewForm isFetching={true} restaurant={{}}/>);
    expect(wrapper.find('h3').text()).to.equal('Fetching'); 
  });

  it('should display the review form for the restaurant', () => {
    let wrapper = shallow(<ReviewForm isFetching={false} restaurant={ restaurant } />);
    // console.log(wrapper.find('Link').at(0).debug());
    expect(wrapper.find('Link').at(0).prop('to')).to.equal('restaurants/123');
  });

  it('should respond to onChange event when comment input is changed', () => {
    let updateComment = spy();
    let wrapper = shallow(<ReviewForm
      isFetching={false}
      restaurant={ restaurant }
      updateComment={ updateComment } />);
    wrapper.find('#comment').simulate('change', {target: {value: 'My new value'}});
    expect(updateComment.calledWith('My new value')).to.be.true;
  });

  it('should be able to submit the form', () => {
    let createReview = spy();
    let wrapper = shallow(<ReviewForm
      isFetching={false}
      restaurant={ restaurant }
      createReview={ createReview }
      restaurantId={ '123abc' }
      comment={ 'Very good!' }
      rating={ '5' } />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(createReview.calledWith('123abc', 'Very good!', '5')).to.be.true;
  });
});