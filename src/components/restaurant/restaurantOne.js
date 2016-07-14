import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { object, string, func, bool } = PropTypes;

RestaurantOne.propTypes = {
  restaurant: object.isRequired
};

export default function RestaurantOne(props) {
  // Render array of restaurant reviews
  function renderReviews(){
    if (props.restaurant.reviews.length > 0) {
      return props.restaurant.reviews.map((r) => {
        return <div key={r._id}>
          <p>{r.comment} by {r.author.username}</p>
        </div>;
      });
    }
  }

  // Render restaurant information + reviews
  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { Object.keys(props.restaurant).length === 0
          ? <p>{' None '}</p>
          :<div>
            <h4>{ props.restaurant.name }</h4>
            <p>Addess: { props.restaurant.address }</p>
            <p>Open housrs:</p>
            <div className="open-hours">
                <p>Mon: { props.restaurant.hours.mon_start }:00 - { props.restaurant.hours.mon_end }:00</p>
                <p>Tue: { props.restaurant.hours.tue_start }:00 - { props.restaurant.hours.tue_end }:00</p>
                <p>Wed: { props.restaurant.hours.wed_start }:00 - { props.restaurant.hours.wed_end }:00</p>
                <p>Thu: { props.restaurant.hours.thu_start }:00 - { props.restaurant.hours.thu_end }:00</p>
                <p>Fri: { props.restaurant.hours.fri_start }:00 - { props.restaurant.hours.fri_end }:00</p>
                <p>Sat: { props.restaurant.hours.sat_start }:00 - { props.restaurant.hours.sat_end }:00</p>
                <p>Sun: { props.restaurant.hours.sun_start }:00 - { props.restaurant.hours.sun_end }:00</p>
            </div>
            <p>Reviews: Average 
              {(props.restaurant.total_ratings === 0) 
              ? 'None' 
              : (props.restaurant.total_ratings / props.restaurant.reviews.length)} ({props.restaurant.reviews.length} reviews)
            </p>
            <Link to={'/restaurants/' + props.restaurant._id + '/create-review'}>Create Review</Link>
            <hr />
            {renderReviews()}

          </div>}
      </div>;
};
