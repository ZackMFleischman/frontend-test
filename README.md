## Documentation for Zack M Fleischman's Take-home Interview

### Installation, Deployment, Testing, etc
```
# Installation
npm install 

# To Run Locally
npm run server &   # Yelp proxy server
npm start          # Run webpack-dev-server

# Build production code to dist/
npm run build

# Deploy to Heroku (Note this requires being logged in to Heroku)
npm run deploy

# Run tests
npm test

# Run storybook
npm run storybook
```

### Architecture
#### Infrastructure
The stack here is split into 2 programs:
1. The frontend web-app: `src/Main.js`
  - This is built using Javascript/React/Redux/Sass, and bundled by Webpack.
2. The backend server: `src/Server.js`
  - This is built using Node/Express, and is used to proxy yelp API requests, as well as to serve the site's static files in production.

The site is hosted at [https://zacks-superformula-interview.herokuapp.com](https://zacks-superformula-interview.herokuapp.com), on Heroku for simplicity.


#### React Architecture
The structure of the app is pretty straight-forward. `Main.js` is the entrypoint, which creates the Redux store, and then renders `App.js` inside the Redux store provider.

`App.js` uses [react-router](https://github.com/ReactTraining/react-router) to route between the 2 different pages (`RestaurantsPage` and `RestaurantDetailsPage`).

By and large I tried to separate "Containers" from "Views" as much as possible, handling all the data fetching and wrangling in the Containers, and then passing the data down to relatively dumb views as props.

#### Redux Architecture / Data Model
The redux store is split into 3 parts:
1. yelp
    1. categories
    2. restaurants
    3. reviews
2. filters
3. copy

##### Yelp Store Slice
The meat and potatoes of the store is the `yelp` slice. When I fetch data for categories, restaurants or reviews via the yelp API, this is where the data gets stored. 

Each of these sub-stores (categories, restaurants, reviews), has a loading status, and a data object. Keeping it common to these allowed me to re-use common action and reducer logic as seen in `FetchReducer.js`.

There's a problem with this architecture however, in that it doesn't allow for great flexibility with the "Load More Restaurants" feature, as it's loading more data into a sub-store that already is marked as "loaded" potentially. This led to a bit of messiness that were this production software, I would refactor to keep the concept of "initial load" and "subsequent load" separate in the store.

##### Filters Store Slice
This is pretty straight-forward and just stores the current state of the filters on the RestaurantsPage. Keeping these in the store as opposed to state allowed me to persist the filters if the user goes back from one of the Details pages so they don't have to start over.

##### Copy Store Slice
The purpose of this allows for easy localization of text. I only used it for the Header on the main page as a demonstration, but in practice all copy would pull from this slice, and if we wish to switch to say "Spanish" in the page, all we would need to do is fetch and load a spanish version of the copy into that substore, which we could store on a server as a static json file.

### Testing Strategy
I did not test this entire app, as that would have taken more time than I had to devote to this project. Instead I have tested specific pieces of it to be representative of how I normally test my code. Specifically I would look at the following test files:

#### Unit Tests
1. FilterActions.test.js
1. YelpFetcher.test.js
1. RestaurantsPageContainer.test.js
1. RestaurantsPage.test.js
1. FetchData.test.js

#### Integration Tests
1. RestaurantsPage.int.test.js
    1. This will mount a component inside of a Redux Provider with a given redux state, perform operations on components (button click simulations etc), and then assert appropriate behavior and state is achieved in other components in the component tree.

#### Known Issues / Room for improvement
Unfortunately, I do not have more time to devote to this project. If I did, I would have added the following:

1. Make "Load More" dynamically load more restaurants after the existing ones without the existing ones disappearing under a loading spinner.
2. Fix small visual bugs such as image pop-in/resizing/scrolling.
3. Add End to End tests with Cypress or Puppeteer.
4. Style with media queries to make the site responsive for mobile. 
5. Simplify the server by just using a single API endpoint for GraphQL.
6. Refactor the redux store to handle "load more" in a more elegant fashion.
7. Refactor the styles to pull more common styles into a shared sass file to import and use in a more modular fashion.
8. Stress-test with 100s or 1000s of restaurants to see if there are performance issues. There weren't any as of yet, so I didn't bother optimizing for performance unnecessarily. The typical approach here though is to prefer PureComponents when it makes sense and make sure I'm not unnecessarilly declaring new objects as props causing my Components to re-render every time.
