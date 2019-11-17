import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import './App.scss';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import { createYelpFetcher } from './fetchers/YelpFetcherFactory';

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


const fetcher = createYelpFetcher();
fetcher.fetchCategories()
    .then(categories => {
        console.log('printing categories:');
        console.log(JSON.stringify(categories, null, 2));
    })
    .catch(error => {
        console.log('Couldnt fetch categories: ' + error);
    });

export default App;