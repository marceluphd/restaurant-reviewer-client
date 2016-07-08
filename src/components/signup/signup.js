import React, { PropTypes } from 'react';

// Stateless component cannot use "refs"
export default function Signup({handleFormSubmit}) {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <fieldset className="form-group">
          <label>Username:</label>
          <input className="form-control" ref="username" type="text" />
        </fieldset>

        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" ref="email" />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" ref="password" type="password" />
        </fieldset>

        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    </div>
  );
};
