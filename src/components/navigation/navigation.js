import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { header, homeIcon, homeButton, floatRight, navLink } from './style.css';

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

Links.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function Links ({ isAuthenticated }) {
  return isAuthenticated === true
    ? <div className={ floatRight }>
        <Link to='/signout' className={ navLink } role="link">Sign out</Link>
      </div>
    : <div className={ floatRight }>
        <Link to='/signup' className={ navLink } role="link">Sign up</Link>
        <Link to='/signin' className={ navLink } role="link">Sign in</Link>
      </div>;
}

export default function Navigation ({ isAuthenticated }) {
  return (
    <header className={ header }>
      <nav>
        <a href='#' className={ homeButton } role="link">
          <img 
            src='../../images/iconmonstr-home-6-64.png'
            alt="Back to Home Icon"
            className={ homeIcon }/> Res Rev
        </a>
        <Links isAuthenticated={ isAuthenticated } />
      </nav>
    </header>
  );
}
