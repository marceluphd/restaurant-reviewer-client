import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation/navigation';

const MainContainer = React.createClass({
  propTypes: {
    children: PropTypes.node,
    isAuthenticated: PropTypes.bool.isRequired
  },

  render () {
    return (
      <div>
        <Navigation isAuthenticated={ this.props.isAuthenticated }/>
        <main>
          { this.props.children }
        </main>
        <footer>
          <p className="createdBy">
            Built with
            <img className="heart-img" src="/images/iconmonstr-favorite-4-icon-24.png" alt="heart" className="heartImage" />
            by
            <a href="https://github.com/yhagio" className="nameLink" target="_blank">Yuichi Hagio</a>
          </p>
        </footer>
      </div>
    );
  }
});

export default connect(
  ({ users }) => ({ isAuthenticated: users.isAuthenticated })
)(MainContainer);
