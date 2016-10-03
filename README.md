[![travis build](https://img.shields.io/travis/yhagio/restaurant-reviewer-client.svg?style=flat-square)](https://travis-ci.org/yhagio/restaurant-reviewer-client)


## Restaurant Reviewer
Accessibility first restaurant reviewer application

### [DEMO](https://res-rev.firebaseapp.com)

**Unique Features**
- Built with React, Redux, React-Router, Immutable.js
- User authentication with JWT
- User can access via keyboards only or screen reader (ARIA)
- 5 Star rating system (HTML, CSS only)
- Simple search and filter for finding restaurants

![Screenshot](/scr.png)

#### Backend Repo
- https://github.com/yhagio/restaurant-reviewer-api


#### To run this app (development version) locally
```
git clone git@github.com:yhagio/restaurant-reviewer-client.git
cd restaurant-reviewer-client
npm install && npm run start
```
Then go to `http://localhost:8080/` in your browser.

#### To run production version (Minified version)
```
npm run production
npm run production:run
```
Then go to `http://127.0.0.1:8080`

Backend API is hosted on Heroku :)

#### To run Back-end locally
Uncomment DEV and comment out PRODUCTION from `src/config/constants.js` <br />
Then clone the backend as follows (Assume you have MongoDB & Node.js & NPM installed)
```
git clone git@github.com:yhagio/restaurant-reviewer-api.git
cd restaurant-reviewer-api
npm install
mongod
```
Then open another tab in terminal
```
npm run start
```

#### Testing
- [Mocha](https://mochajs.org/)
- [Chai - Expect](http://chaijs.com/api/bdd/)
- [Sinon - spy](http://sinonjs.org/docs/#spies)
- [Enzyme - shallow()](https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md)
```
npm run test
```

### Resources
- [Starability.css - Accessible rating with animations on top](https://github.com/LunarLogic/starability)
- [Star rating widget with pure CSS](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/)
- [Web Accessibility - Custom Controls](https://www.w3.org/WAI/tutorials/forms/custom-controls/)

- [Color Contrast Table](http://www.utdallas.edu/~melacy/pages/2D_Design/Itten_ColorContrasts/IttenColorContrasts.html)
- [Readonly CSS HTML 5 star ratings codepen example](https://codepen.io/yhagio/pen/VjxrJY?editors=1100#0)
### Tools
- [ImageOptim](https://imageoptim.com/mac)
- [Webpack](http://webpack.github.io/docs/)
