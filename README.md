## Restaurant Reviewer
Accessibility first restaurant reviewer application

**Unique Features**
- Built with React, Redux, React-Router
- User authentication with JWT
- User can access via keyboards only or screen reader (ARIA)
- 5 Star rating system (HTML, CSS only)
- Simple search and filter for finding restaurants

#### Backend Repo
- https://github.com/yhagio/restaurant-reviewer-api


#### To run locally
```
git clone git@github.com:yhagio/restaurant-reviewer-client.git
cd restaurant-reviewer-client
npm install && npm run start
```
Then go to `http://localhost:8080/` in your browser.

Backend API is hosted on Heroku :)

#### To run Back-end locally
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

### Resources
- [Starability.css - Accessible rating with animations on top](https://github.com/LunarLogic/starability)
- [Star rating widget with pure CSS](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/)
- [Web Accessibility - Custom Controls](https://www.w3.org/WAI/tutorials/forms/custom-controls/)

- [Color Contrast Table](http://www.utdallas.edu/~melacy/pages/2D_Design/Itten_ColorContrasts/IttenColorContrasts.html)
- [Readonly CSS HTML 5 star ratings codepen example](https://codepen.io/yhagio/pen/VjxrJY?editors=1100#0)
### Tools
- [ImageOptim](https://imageoptim.com/mac)
- [Webpack](http://webpack.github.io/docs/)
- [PostCSS](http://postcss.org/)
- [PostCSS-Loader](https://github.com/postcss/postcss-loader)
