import React, { PropTypes } from 'react';

export default function ReviewForm() {
  return (
    <form>
      <input type="text" placeholder="comment"/>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button>Submit</button>
    </form>
  );
};
