import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import './App.scss';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';

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

export default App;