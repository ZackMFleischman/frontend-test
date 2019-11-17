import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import './App.scss';
import RestaurantsPageContainer from './pages/RestaurantsPageContainer';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RestaurantsPageContainer />
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