import React, { PropTypes } from 'react';
import { starabilityBasic } from '../../styles/rating.css';

const { object, string, func, bool } = PropTypes;

ReviewForm.propTypes = {
  updateComment: func.isRequired,
  updateRating: func.isRequired,
  createReview: func.isRequired
};

export default function ReviewForm(props) {
  function handleFormSubmit(e) {
    e.preventDefault();
    props.createReview(props.restaurantId, props.comment, props.rating);
  }

  return (
    <form onSubmit={handleFormSubmit}>

      <input
        type="text"
        name="comment"
        placeholder="comment"
        onChange={(e) => props.updateComment(e.target.value)}/>

      <fieldset className={starabilityBasic}>
        <legend>Rate this restaurant:</legend>
        <input type="radio" id="first-rate5" name="rating" value="5" onChange={(e) => props.updateComment(e.target.value)} />
        <label htmlFor="first-rate5" title="Amazing">5 stars</label>
        <input type="radio" id="first-rate4" name="rating" value="4" onChange={(e) => props.updateComment(e.target.value)} />
        <label htmlFor="first-rate4" title="Very good">4 stars</label>
        <input type="radio" id="first-rate3" name="rating" value="3" onChange={(e) => props.updateComment(e.target.value)} />
        <label htmlFor="first-rate3" title="Average">3 stars</label>
        <input type="radio" id="first-rate2" name="rating" value="2" onChange={(e) => props.updateComment(e.target.value)} />
        <label htmlFor="first-rate2" title="Not good">2 stars</label>
        <input type="radio" id="first-rate1" name="rating" value="1" onChange={(e) => props.updateComment(e.target.value)} />
        <label htmlFor="first-rate1" title="Terrible">1 star</label>
      </fieldset>
      
      {/*<fieldset className={ rating }>
        <legend>Please rate:</legend>
        <input type="radio" id="star5" name="rating" value="5" onClick={(e) => props.updateRating(e.target.value)}/>
        <label htmlFor="star5" title="Rocks!">5 stars</label>
        <input type="radio" id="star4" name="rating" value="4" onClick={(e) => props.updateRating(e.target.value)}/>
        <label htmlFor="star4" title="Pretty good">4 stars</label>
        <input type="radio" id="star3" name="rating" value="3" onClick={(e) => props.updateRating(e.target.value)}/>
        <label htmlFor="star3" title="Meh">3 stars</label>
        <input type="radio" id="star2" name="rating" value="2" onClick={(e) => props.updateRating(e.target.value)}/>
        <label htmlFor="star2" title="Kinda bad">2 stars</label>
        <input type="radio" id="star1" name="rating" value="1" onClick={(e) => props.updateRating(e.target.value)}/>
        <label htmlFor="star1" title="Sucks big time">1 star</label>
      </fieldset>*/}

      {/*<Rating 
        start={0}
        stop={5}
        empty={React.createElement('img', {
          src: 'images/star-empty.png',
          className: ''
        })}
        onChange={(v) => props.updateRating(v)}
        full={React.createElement('img', {
          src: 'images/star-full.png',
          className: ''
        })}/>*/}

      <button>Submit</button>
    </form>
  );
};



      // <select onChange={(e) => props.updateRating(e.target.value)}>
      //   <option value="1">1</option>
      //   <option value="2">2</option>
      //   <option value="3">3</option>
      //   <option value="4">4</option>
      //   <option value="5">5</option>
      // </select>