import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import {
  titleLink,
  starabilityBasic,
  labeled,
  inputField,
  submitButton
} from './style.css';

const { string, func } = PropTypes;

ReviewForm.propTypes = {
  updateComment: func.isRequired,
  updateRating: func.isRequired,
  createReview: func.isRequired,
  restaurantId: string.isRequired,
  comment: string.isRequired,
  rating: string.isRequired
};

export default function ReviewForm (props) {
  function handleFormSubmit (e) {
    e.preventDefault();
    props.createReview(props.restaurantId, props.comment, props.rating);
  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <h2>
        <Link
          to={`restaurants/${props.restaurant._id}`}
          className={ titleLink }
          role="link">{ props.restaurant.name }</Link>
      </h2>
      <hr />
      <span id='errReviewForm' className='error'></span>
      <label className={ labeled }>Review Comment<br />
        <input
          id='comment'
          name='comment'
          placeholder='comment'
          onChange={ (e) => props.updateComment(e.target.value) }
          className={ inputField }
          type='text'
          required={ true } />
      </label>

      <fieldset className={ starabilityBasic }>
        <legend>Rate this restaurant:</legend>
        <input
          type='radio'
          id='first-rate5'
          name='rating'
          value='5'
          onChange={ (e) => props.updateRating(e.target.value) } />
        <label
          htmlFor='first-rate5'
          title='Amazing'>5 stars</label>

        <input
          type='radio'
          id='first-rate4'
          name='rating'
          value='4'
          onChange={ (e) => props.updateRating(e.target.value) } />
        <label
          htmlFor='first-rate4'
          title='Very good'>4 stars</label>

        <input
          type='radio'
          id='first-rate3'
          name='rating'
          value='3'
          onChange={ (e) => props.updateRating(e.target.value) } />
        <label
          htmlFor='first-rate3'
          title='Average'>3 stars</label>

        <input
          type='radio'
          id='first-rate2'
          name='rating'
          value='2'
          onChange={ (e) => props.updateRating(e.target.value) } />
        <label
          htmlFor='first-rate2'
          title='Not good'>2 stars</label>

        <input
          type='radio'
          id='first-rate1'
          name='rating'
          value='1'
          onChange={ (e) => props.updateRating(e.target.value) } />
        <label
          htmlFor='first-rate1'
          title='Terrible'>1 star</label>

      </fieldset>

      <button
        action='submit'
        className={ submitButton }
        role="button">Submit</button>
    </form>
  );
}
