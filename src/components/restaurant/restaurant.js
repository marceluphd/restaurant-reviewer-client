import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { object, string, func, bool, array } = PropTypes;

Restaurant.propTypes = {
  restaurants: array.isRequired
};

export default function Restaurant(props) {

  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { props.restaurants.length === 0 ? <p>{'No restaurants found.'}</p> : null }
        <input type="text" name="search" placeholder="Search Keyword" value={props.searchText} onChange={(e) => props.searchRestaurants(e.target.value)}/>
        <select value={props.searchCategory} onChange={(e) => props.filterRestaurantsByCategory(e.target.value)} >
          <option value="default">Category</option>
          <option value="French">French</option>
          <option value="Japanese">Japanese</option>
          <option value="Mexican">Mexican</option>
          <option value="Korean">Korean</option>
        </select>
        { props.restaurants.map((res) => (
          <Link to={`restaurants/${res._id}`} key={res._id}>
            <h4>{ res.name }</h4>
            <p>Addess: { res.address }</p>
            <p>Reviews: Average {(res.total_ratings === 0) ? 'None' : (res.total_ratings / res.reviews.length)} ({res.reviews.length} reviews)</p>
          </Link>
        )) }
      </div>;
};
