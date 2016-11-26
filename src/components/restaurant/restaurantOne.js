import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  restaurantImageOnePage,
  title,
  restoBoxOne,
  starRatings,
  createReviewButton,
  openHours,
  photoBoxOne,
  address,
  reviewsList,
  reviewItem,
  reviewComment,
  commentBody,
  reviewAuthor,
  authorName,
  date
} from './restaurant.css';
import { dotdotdot } from '../../styles/ellipsis-animation.css';
import { getFormattedDate } from '../../helpers/utils';

RestaurantOne.propTypes = {
  restaurant: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default function RestaurantOne (props) {
  // Render array of restaurant reviews
  function renderReviews () {
    if (props.restaurant.get('reviews').size > 0) {
      return props.restaurant.get('reviews').map((r) => {
        return (
          <li key={ r.get('_id') } className={ reviewItem }>
            <div className={ reviewComment }>
              <p className={ commentBody }>{ r.get('comment') }</p>
            </div>
            <div className={ reviewAuthor }>
              <div className={ starRatings } title={ `${r.get('rating')} stars` }></div>
              <p className={ authorName }>{ r.get('author').get('username') }
                <em className={ date }>{ getFormattedDate(r.get('created')) }</em>
              </p>
            </div>
          </li>
        );
      });
    } else {
      return <p>{ 'None yet. You wanna write one?' }</p>;
    }
  }

  // Render restaurant information + reviews
  return props.isFetching === true
    ? <h2 className={ dotdotdot }>{ 'Fetching' }</h2>
    : <div>
        { props.restaurant.size !== 9
          ? <p>{ 'N/A' }</p>
          : <div>
              <h3 className={ title }>{ props.restaurant.get('name') }</h3>
              <div>
                <div className={ photoBoxOne }>
                  <img
                    src={ props.restaurant.get('photo') }
                    alt={ `Photo of ${props.restaurant.get('name')}` }
                    className={ restaurantImageOnePage }/>
                </div>
                <div className={ restoBoxOne }>
                  <p><strong>Address:</strong></p>
                  <p className={ address } >{ props.restaurant.get('address') }</p>
                  <p><strong>Open housrs:</strong></p>
                  <div className={ openHours }>
                    <p>Mon: { props.restaurant.get('hours').get('mon_start') }:00 - { props.restaurant.get('hours').get('mon_end') }:00</p>
                    <p>Tue: { props.restaurant.get('hours').get('tue_start') }:00 - { props.restaurant.get('hours').get('tue_end') }:00</p>
                    <p>Wed: { props.restaurant.get('hours').get('wed_start') }:00 - { props.restaurant.get('hours').get('wed_end') }:00</p>
                    <p>Thu: { props.restaurant.get('hours').get('thu_start') }:00 - { props.restaurant.get('hours').get('thu_end') }:00</p>
                    <p>Fri: { props.restaurant.get('hours').get('fri_start') }:00 - { props.restaurant.get('hours').get('fri_end') }:00</p>
                    <p>Sat: { props.restaurant.get('hours').get('sat_start') }:00 - { props.restaurant.get('hours').get('sat_end') }:00</p>
                    <p>Sun: { props.restaurant.get('hours').get('sun_start') }:00 - { props.restaurant.get('hours').get('sun_end') }:00</p>
                  </div>
                  <div
                    className={ starRatings }
                    title={ `${Math.round(props.restaurant.get('total_ratings') / props.restaurant.get('reviews').size)} stars` }></div>
                  <span>
                    { (props.restaurant.get('total_ratings') === 0)
                    ? 'N/A'
                    : null } ({ props.restaurant.get('reviews').size } reviews)
                  </span>
                </div>
              </div>
              <br />
              <br />
              <Link
                to={ '/restaurants/' + props.restaurant.get('_id') + '/create-review' }
                className={ createReviewButton }
                role="link">Create Review</Link>
              <ul className={ reviewsList } >
                <h3>Reviews</h3>
                { renderReviews() }
              </ul>
            </div> }
      </div>;
}
