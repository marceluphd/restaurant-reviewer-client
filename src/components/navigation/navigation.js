import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="#">HOME</a>
        <Link to="/create-review" className="nav-link">Create Review</Link>

        {/*<div className="float-right">
          <Link to="/signup" className="nav-link">Sign up</Link>
          <Link to="/signin" className="nav-link">Sign in</Link>
        </div>*/}

        <div className="float-right">
          {/*<Link to="/account" className="nav-link">My Account</Link>*/}
          <Link to="/signout" className="nav-link">Sign out</Link>
        </div>
      </nav>
    </header>
  )
}
