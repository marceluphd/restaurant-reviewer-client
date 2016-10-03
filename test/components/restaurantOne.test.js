import React from 'react';
import { Map } from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RestaurantOne, { RenderReviews } from '../../src/components/restaurant/restaurantOne';

describe('Component: RestaurantOne', () => {
  it('Displays Fetching when it is still fetching', () => {
    let wrapper = shallow(<RestaurantOne isFetching={true} />);
    expect(wrapper.find('h2').text()).to.equal('Fetching'); 
  });

  it('Displays a restaurant', () => {
    const restaurant = Map({
      _id: '123',
      photo: 'www.whatever.com/photo.jpeg',
      name: 'Sushi bar',
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


    let wrapper = shallow(<RestaurantOne isFetching={false} restaurant={ restaurant }/>);
    expect(wrapper.find('img').prop('src')).to.equal('www.whatever.com/photo.jpeg');
  });
});