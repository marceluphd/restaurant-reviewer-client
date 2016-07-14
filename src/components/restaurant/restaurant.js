import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const { object, string, func, bool, array } = PropTypes;

Restaurant.propTypes = {
  restaurants: array.isRequired
};

export default function Restaurant(props) {
  // console.log('restaurants', props.restaurants)
  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { props.restaurants.length === 0 ? <p>{'No restaurants available yet.'}</p> : null }
        { props.restaurants.map((res) => (
          <Link to={`restaurants/${res._id}`} key={res._id}>
            <h4>{ res.name }</h4>
            <p>Addess: { res.address }</p>
            <p>Reviews: Average {(res.total_ratings === 0) ? 'None' : (res.total_ratings / res.reviews.length)} ({res.reviews.length} reviews)</p>
          </Link>
        )) }
      </div>;
};
