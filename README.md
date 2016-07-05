## Restaurant Reviewer

- Accessibility first app

The application includes:
- Restaurant names
- A photograph
- Address
- Operating hours for each restaurant along with

Reviews including
- the name of the reviewer
- date of review
- 5-star rating system
- comments

The application must include
- an application header
- a menu providing multiple ways to filter the restaurants

When viewing a specific restaurant, current reviews are displayed along with a form for the user to submit their own review.


- [Project specification](https://github.com/udacity/Project-Descriptions-for-Review/blob/master/Senior%20Web%20Dev/Restaurant%20Reviews.md)

**Frontend:**

- React / Redux / React-Router

Home page:
- Show all restaurants with reviews
- Searchable / Sortable by alphabetical order & category

Authentication pages:
- Singup
- Signin
- Forgotpassword
or
- Social login (Google or Facebook)

Create review modal:
- User focus lock-in

Footer:
- Pagination before Footer
- Site info, Copy Right, etc


**Backend RESTful API**:

- Node.js / Express
- PostgreSQL


Data Structure:

User:
- Username
- Email
- Password
- Reviews [ReviewId]

Review:
- UserId
- RestaurantId
- Comment
- Date
- Rating

Restaurant:
- Photo
- Name
- Address
- Hours
- Reviews [ReviewId]

### Tools
- [ImageOptim](https://imageoptim.com/mac)
- [Webpack](http://webpack.github.io/docs/)
- [PostCSS](http://postcss.org/)
- [PostCSS-Loader](https://github.com/postcss/postcss-loader)
