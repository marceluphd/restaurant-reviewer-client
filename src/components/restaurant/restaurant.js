import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { Link } from 'react-router';
const { func, array } = PropTypes;
import {
  searchLabel,
  searchInput,
  restaurantsBox,
  restuarantsListBox,
  restaurantCard,
  restaurantImage,
  photoBox,
  restoBox,
  starRatings,
  reviewCount
} from './restaurant.css';
import { dotdotdot } from '../../styles/ellipsis-animation.css';

Restaurant.propTypes = {
  restaurants: PropTypes.instanceOf(List),
  filterRestaurantsByCategory: func.isRequired
};

export default function Restaurant (props) {
  return props.isFetching === true
    ? <h2 className={ dotdotdot }>{ 'Fetching' }</h2>
    : <div>
        { props.restaurants.length === 0
          ? <p>{ 'No restaurants found.' }</p>
          : null }
        <h2>Restaurants List</h2>

        <label htmlFor="searchInput" className={ searchLabel }>Search<br />
        <input
          id="searchInput"
          name="searchInput"
          type='text'
          name='search'
          placeholder='Restaurant...'
          className={ searchInput }
          value={ props.searchText }
          onChange={ (e) => props.searchRestaurants(e.target.value) }
          autoFocus={ true } />
        </label><br />

        <label htmlFor="filterSelection" className={ searchLabel }>Category Filter</label>
        <select
          id="filterSelection"
          name="filterSelection"
          value={ props.searchCategory }
          onChange={ (e) => props.filterRestaurantsByCategory(e.target.value) } >

          <option value='default'>ALL</option>
          <option value='French'>French</option>
          <option value='Japanese'>Japanese</option>
          <option value='Mexican'>Mexican</option>
          <option value='Korean'>Korean</option>

        </select>

        <div className={ restaurantsBox }>
        { props.restaurants.map((res) => (
          <Link
            to={ `restaurants/${res.get('_id')}` }
            key={ res.get('_id') }
            className={ restaurantCard }
            role="button">

            <div className={ restuarantsListBox } >
              <div className={ photoBox }>
                <img
                  src={ res.get('photo') }
                  alt={ `Photo of ${res.get('name')}` }
                  className={ restaurantImage }/>
              </div>

              <div className={ restoBox }>
                <h4>{ res.get('name') }</h4>
                <p>{ res.get('category') }</p>
                <p>{ res.get('address') }</p>
                <div
                  className={ starRatings }
                  title={ `${Math.round(res.get('total_ratings') / res.get('reviews').size)} stars` }></div>
                <span>
                  { (res.get('total_ratings') === 0)
                  ? 'N/A'
                  : null } <span className={ reviewCount }>({ res.get('reviews').size } reviews)</span>
                </span>
              </div>
            </div>
          </Link>
        )) }
        </div>
      </div>;
}
