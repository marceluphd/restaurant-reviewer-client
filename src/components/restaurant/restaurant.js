import React, { PropTypes } from 'react';
const { object, string, func, bool } = PropTypes;

Restaurant.propTypes = {

};

export default function Restaurant(props) {
  console.log('restaurants', props.restaurants)
  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { props.restaurants.length === 0 ? <p>{'No restaurants available yet.'}</p> : null }
        { props.restaurants.map((res) => (
          <div>
            <h4>{ res.name }</h4>
            <p>Addess: { res.address }</p>
            <p>Open housrs:</p>
            <div className="open-hours">
              <p>Mon: { res.hours.mon_start }:00 - { res.hours.mon_end }:00</p>
              <p>Tue: { res.hours.tue_start }:00 - { res.hours.tue_end }:00</p>
              <p>Wed: { res.hours.wed_start }:00 - { res.hours.wed_end }:00</p>
              <p>Thu: { res.hours.thu_start }:00 - { res.hours.thu_end }:00</p>
              <p>Fri: { res.hours.fri_start }:00 - { res.hours.fri_end }:00</p>
              <p>Sat: { res.hours.sat_start }:00 - { res.hours.sat_end }:00</p>
              <p>Sun: { res.hours.sun_start }:00 - { res.hours.sun_end }:00</p>
            </div>
            <p>Reviews: Average {(res.total_ratings === 0) ? 'None' : (res.total_ratings / res.reviews.length)} ({res.reviews.length} reviews)</p>
          </div>
        )) }
      </div>;
};
