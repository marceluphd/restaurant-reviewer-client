import React from 'react';

const ReviewsContainer = React.createClass({
  render () {
    return (
      <div>
        <h3>Restaurants and Reviews</h3>
        <ul>
          <li>
            <h4>El Rey Del Taco</h4>
            <p>Open housrs:</p>
            <div className="open-hours">
              <p>Mon: 11:00 - 22:00</p>
              <p>Tue: 11:00 - 22:00</p>
              <p>Wed: 11:00 - 22:00</p>
              <p>Thu: 11:00 - 22:00</p>
              <p>Fri: 11:00 - 22:00</p>
              <p>Sat: 11:00 - 22:00</p>
              <p>Sun: 11:00 - 22:00</p>
            </div>

            <p>Reviews: Average 4.5 (123 reviews)</p>
            <ul>
              <li>
                <div className="">
                  <img src="" alt="Profile Picture" />
                  <a href="#">Yuichi Hagio</a>
                </div>
                <p>Rating: 5</p>
                <p>Date: 06/30/2016</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </li>
            </ul>

          </li>
        </ul>

        <p>Page 1 / 10</p>
      </div>
    );
  }
});

export default ReviewsContainer;
