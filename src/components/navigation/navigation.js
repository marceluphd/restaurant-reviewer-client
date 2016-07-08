import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function CreateReview({ isAuthenticated }) {
  return isAuthenticated === true
    ? <Link to="/create-review" className="nav-link">Create Review</Link>
  : <noscript />;
}

function Links({ isAuthenticated }) {
  return isAuthenticated === true
    ? <div className="float-right">
        <Link to="/account" className="nav-link">My Account</Link>
        <Link to="/signout" className="nav-link">Sign out</Link>
      </div>
    : <div className="float-right">
        <Link to="/signup" className="nav-link">Sign up</Link>
        <Link to="/signin" className="nav-link">Sign in</Link>
      </div>;
}

export default function Navigation({ isAuthenticated }) {
  return (
    <header>
      <nav>
        <a href="#">HOME</a>
        <CreateReview isAuthenticated={ isAuthenticated } />
        <Links isAuthenticated={ isAuthenticated } />
      </nav>
    </header>
  )
}
