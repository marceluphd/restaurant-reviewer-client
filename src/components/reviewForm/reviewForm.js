import React, { PropTypes } from 'react';

const { object, string, func, bool } = PropTypes;

ReviewForm.propTypes = {
  updateComment: func.isRequired,
  updateRating: func.isRequired,
  createReview: func.isRequired
};

export default function ReviewForm(props) {
  console.log(props);
  function handleFormSubmit(e) {
    e.preventDefault();
    props.createReview(props.comment, props.rating);
  }

  return (
    <form onSubmit={handleFormSubmit}>

      <input
        type="text"
        name="comment"
        placeholder="comment"
        onChange={(e) => props.updateComment(e.target.value)}/>

      <select onChange={(e) => props.updateRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button>Submit</button>
    </form>
  );
};
