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
- a menu providing multiple ways to filter the restaurants (Category, Ratings)

When viewing a specific restaurant, current reviews are displayed along with a form for the user to submit their own review.

- [Project specification](https://github.com/udacity/Project-Descriptions-for-Review/blob/master/Senior%20Web%20Dev/Restaurant%20Reviews.md)

### TODO

- [X] Authentications (Signup, Signin, Signout)
- [X] Display Restaurants List
- [X] Individual Restaurant Page > Show Reviews
- [X] Create a review for a restaurant

- [X] Filter by genre of restaurant lists (Category)
- [X] Search restaurants by keywords
- [X] 5-star ratings

- [PostCSS](http://postcss.org/)
- [PostCSS-Loader](https://github.com/postcss/postcss-loader)

- [X] ARIA Accessibility
- [X] Keyboards only friendly
- [X] Screen Reader friendly
- [X] Color blind users friendly

- [X] Signin form validations
- [X] Signup form validations
- [ ] reviewForm form validations
- [X] Minimize Assets, CSS, HTML, Javascript (Production)
- [X] Image Optimized (ImageOptim)
- [X] ESLint
- [X] CSS refactor
- [ ] Unit testing
- [ ] Browsers (Chrome, Firefox, Safari, Opera)

Additionally:

- [ ] Prevent creating multiple reviews for the same restaurant
- [ ] Updatable or deletable reviews
- [ ] Load More for Restaurants, Reviews
- [ ] Component testing Enzyme
- [ ] Redux testing
- [ ] CSS: composes
- [ ] Browser (Firefox, Chrome, Safari)



### Priority Fix
- Production
- Focus style can be provided to visually present which page elements has the current focus.

### Done Fix (7/27)
- Aria roles to every links and buttons i.e. `rolw="button"`
- Removed duplicated <main> tags
- Filter input label
- Star rating is now screen-reader-friendly, for example, 4 stars instead of 4
- Add review date

### Done fix (7/28)
- ARIA role for link element to "button" in `components/restaurant/restaurant.js`
- `webpack -p` warnings [here](https://github.com/webpack/webpack/issues/2352). Uglify warns about Babel output; nothing we can do here.
- So, added plugin to disable warnings from UglifyJS.
- added `tabindex="-1"` on star ratings for reviewForm

