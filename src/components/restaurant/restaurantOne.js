import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { object, string, func, bool } = PropTypes;
import { 
  restaurantImage,
  photoBox,
  restoBox, 
  starRatings,
  createReviewButton,
  openHours,
  restaurantBox,
  photoBoxOne,
  address,
  reviewsList,
  reviewItem,
  reviewComment,
  reviewAuthor,
  authorName
} from './restaurant.css';

RestaurantOne.propTypes = {
  restaurant: object.isRequired
};

export default function RestaurantOne(props) {
  // Render array of restaurant reviews
  function renderReviews(){
    if (props.restaurant.reviews.length > 0) {
      return props.restaurant.reviews.map((r) => {
        return (
          <li key={r._id} className={ reviewItem }>
            <div className={ reviewComment }>
              <p>{r.comment}</p>
            </div>
            <div className={ reviewAuthor }>
              <div className={ starRatings } title=".1000"></div>
              <p className={ authorName }>{r.author.username}</p>
            </div>
          </li>
        );
      });
    } else {
      return 'None yet. You wanna write one?';
    }
  }

  // Render restaurant information + reviews
  return props.isFetching === true
    ? <h2 className='header'>{ 'Fetching' }</h2>
    : <div>
        { Object.keys(props.restaurant).length === 0
          ? <p>{'N/A'}</p>
          :<div>
          
            <h3>{ props.restaurant.name }</h3>
            
            <div className={ restaurantBox }>
              <div className={ photoBoxOne }>
                <img src={props.restaurant.photo} alt={`Photo of ${props.restaurant.name}`} className={ restaurantImage }/>
              </div>
              <div className={ restoBox }>
                <p><strong>Address:</strong></p>
                <p className={ address } >{ props.restaurant.address }</p>
                <p><strong>Open housrs:</strong></p>
                <div className={ openHours }>
                  <p>Mon: { props.restaurant.hours.mon_start }:00 - { props.restaurant.hours.mon_end }:00</p>
                  <p>Tue: { props.restaurant.hours.tue_start }:00 - { props.restaurant.hours.tue_end }:00</p>
                  <p>Wed: { props.restaurant.hours.wed_start }:00 - { props.restaurant.hours.wed_end }:00</p>
                  <p>Thu: { props.restaurant.hours.thu_start }:00 - { props.restaurant.hours.thu_end }:00</p>
                  <p>Fri: { props.restaurant.hours.fri_start }:00 - { props.restaurant.hours.fri_end }:00</p>
                  <p>Sat: { props.restaurant.hours.sat_start }:00 - { props.restaurant.hours.sat_end }:00</p>
                  <p>Sun: { props.restaurant.hours.sun_start }:00 - { props.restaurant.hours.sun_end }:00</p>
                </div>

                <div className={ starRatings } title=".1000"></div>
                
                <span> 
                  {(props.restaurant.total_ratings === 0) 
                  ? 'N/A' 
                  : Math.round(props.restaurant.total_ratings / props.restaurant.reviews.length)} ({props.restaurant.reviews.length} reviews)
                </span>
              </div>
            </div>

            <br /><br />

            <Link to={'/restaurants/' + props.restaurant._id + '/create-review'} className={ createReviewButton }>Create Review</Link>
            <ul className={ reviewsList } >
              <h3>Reviews</h3>
              {renderReviews()}
            </ul>

          </div>}
      </div>;
};