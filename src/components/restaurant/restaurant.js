import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { func, array } = PropTypes;
import {
  searchLabel,
  searchInput,
  restaurantCard,
  restaurantImage,
  photoBox,
  restoBox,
  starRatings,
  reviewCount
} from './restaurant.css';

Restaurant.propTypes = {
  restaurants: array.isRequired,
  filterRestaurantsByCategory: func.isRequired
};

export default function Restaurant (props) {
  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
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

          <option value='default'>Select ▼</option>
          <option value='French'>French</option>
          <option value='Japanese'>Japanese</option>
          <option value='Mexican'>Mexican</option>
          <option value='Korean'>Korean</option>

        </select>

        { props.restaurants.map((res) => (
          <Link
            to={ `restaurants/${res._id}` }
            key={ res._id }
            className={ restaurantCard }
            role="link">

            <div className={ photoBox }>
              <img
                src={ res.photo }
                alt={ `Photo of ${res.name}` }
                className={ restaurantImage }/>
            </div>

            <div className={ restoBox }>
              <h4>{ res.name }</h4>
              <p>{ res.category }</p>
              <p>{ res.address }</p>
              <div
                className={ starRatings }
                title={ `${Math.round(res.total_ratings / res.reviews.length)} stars` }></div>
              <span>
                { (res.total_ratings === 0)
                ? 'N/A'
                : null } <span className={ reviewCount }>({ res.reviews.length } reviews)</span>
              </span>

            </div>

          </Link>
        )) }
      </div>;
}
