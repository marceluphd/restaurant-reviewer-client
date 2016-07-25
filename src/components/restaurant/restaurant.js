import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { object, string, func, bool, array } = PropTypes;
import { 
  searchInput,
  restaurantCard,
  restaurantImage,
  photoBox,
  restoBox, 
  starRatings
} from './restaurant.css';

Restaurant.propTypes = {
  restaurants: array.isRequired
};

export default function Restaurant(props) {

  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { props.restaurants.length === 0 
          ? <p>{'No restaurants found.'}</p> 
          : null }
        
        {/* 
          * Restaurant search by name
          */}
        <label>
          <input
            type="text"
            name="search"
            placeholder="Restaurant..."
            className={ searchInput }
            value={props.searchText}
            onChange={(e) => props.searchRestaurants(e.target.value)}
            autoFocus />
        </label>

        {/* 
          * Restaurants category filter
          */}
        <select 
          value={props.searchCategory}
          onChange={(e) => props.filterRestaurantsByCategory(e.target.value)} >

          <option value="default">Category ▼</option>
          <option value="French">French</option>
          <option value="Japanese">Japanese</option>
          <option value="Mexican">Mexican</option>
          <option value="Korean">Korean</option>

        </select>


        {/* 
          * Display the list of restaurants
          */}
        { props.restaurants.map((res) => (
          <Link to={`restaurants/${res._id}`} key={res._id} className={ restaurantCard }>
            <div className={ photoBox }>
              <img src={res.photo} alt={`Photo of ${res.name}`} className={ restaurantImage }/>
            </div>
            <div className={ restoBox }>
              <h4>{ res.name }</h4>
              <p>{ res.category }</p>
              <p>{ res.address }</p>
              <div className={ starRatings } title=".1000"></div>
              <span>
                {(res.total_ratings === 0) 
                ? 'N/A'
                : (res.total_ratings / res.reviews.length)} ({res.reviews.length} reviews)
              </span>
            
            </div>
          </Link>
        )) }
      </div>;
};
