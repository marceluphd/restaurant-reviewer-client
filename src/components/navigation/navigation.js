import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { homeIcon, homeButton, floatRight, navLink } from './style.css';

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

Links.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function Links ({ isAuthenticated }) {
  return isAuthenticated === true
    ? <div className={ floatRight }>
        <Link to='/signout' className={ navLink }>Sign out</Link>
      </div>
    : <div className={ floatRight }>
        <Link to='/signup' className={ navLink }>Sign up</Link>
        <Link to='/signin' className={ navLink }>Sign in</Link>
      </div>;
}

export default function Navigation ({ isAuthenticated }) {
  return (
    <header>
      <nav>
        <a href='#' className={ homeButton } >
          <img src='../../images/iconmonstr-home-6-64.png' className={ homeIcon }/> Res Rev
        </a>
        <Links isAuthenticated={ isAuthenticated } />
      </nav>
    </header>
  );
}
