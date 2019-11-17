import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import './App.scss';
import CounterButton from './components/CounterButton';
import Header from './components/Header';

const RestaurantDetailsPage = (props) => {
    const { restaurantId } = useParams();
    return <h3>Details for restaurant with ID: { restaurantId }</h3>;
};

// MainHeader
// FilterSection
// RestaurantsSection
//      RestaurantCard List
//      LoadMoreButton
const RestaurantsPage = (props) => {
    return <Header title="Restaurant" description="This is the description" />;
};

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>

                    <Route path="/restaurant-details/:restaurantId">
                        <RestaurantDetailsPage />
                    </Route>

                    <Route path="/">
                        <RestaurantsPage />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
};

export default App;