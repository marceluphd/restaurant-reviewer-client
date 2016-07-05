import React from 'react';
import Navigation from '../../components/navigation/navigation';

const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <Navigation />
        <main>
          { this.props.children }
        </main>
        <footer>
          <p className="createdBy">
            Built with
            <img src="/images/iconmonstr-favorite-4-icon-24.png" alt="heart" className="heartImage" />
            by
            <a href="https://github.com/yhagio" className="nameLink" target="_blank">Yuichi Hagio</a>
          </p>
        </footer>
      </div>
    );
  }
});

export default MainContainer;
