import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import RestaurantsPageContainer from './pages/RestaurantsPageContainer';
import RestaurantDetailsPageContainer from './pages/RestaurantDetailsPageContainer';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <RestaurantsPageContainer />
                    </Route>

                    <Route path="/restaurant-details/:restaurantAlias">
                        <RestaurantDetailsPageContainer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;