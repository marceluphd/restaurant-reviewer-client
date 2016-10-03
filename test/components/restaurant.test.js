import React from 'react';
import { List } from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Restaurant from '../../src/components/restaurant/restaurant';

describe('Component: Restaurant', () => {
  it('Displays Fetching when it is still fetching', () => {
    let wrapper = wrapper = shallow(<Restaurant isFetching={true} />);
    expect(wrapper.find('h2').text()).to.equal('Fetching'); 
  });

  it('Displays ', () => {
    const restaurants = List([
      { _id: '123',
        photo: 'www.whatever.com/photo.jpeg',
        name: 'Sushi bar',
        category: 'Japanese',
        address: '123 ABC Street',
        total_ratings: 5,
        reviews: [{ id: '111', comment: 'come comment'}],
        get(name) {
          return this[name];
        }
      }
    ]);

    let wrapper = wrapper = shallow(<Restaurant isFetching={false} restaurants={restaurants}/>);
    expect(wrapper.find('img').at(0).prop('src')).to.equal('www.whatever.com/photo.jpeg');
  });
});
