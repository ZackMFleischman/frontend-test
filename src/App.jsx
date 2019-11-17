import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import fetch from 'isomorphic-fetch';

import './App.scss';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import YelpFetcher from './yelp/YelpFetcher';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RestaurantsPage />
                    </Route>

                    <Route path="/restaurant-details/:restaurantId">
                        <RestaurantDetailsPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};


const baseUrl = process.env.SERVER_URL;
const fetcher = new YelpFetcher(baseUrl);
fetcher.fetchCategories()
    .then(categories => {
        console.log('printing categories:');
        console.log(JSON.stringify(categories, null, 2));
    })
    .catch(error => {
        console.log('Couldnt fetch categories: ' + error);
    });

export default App;