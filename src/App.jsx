import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import { getYelpFetcher } from './fetchers/YelpFetcherFactory';
import './App.scss';
import RestaurantsPageContainer from './pages/RestaurantsPageContainer';
import { isProd, isDebug, isTest, isDev } from './Environment';

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


// const fetcher = getYelpFetcher();
// fetcher.fetchCategories()
//     .then(categories => {
//         console.log('printing categories:');
//         console.log(JSON.stringify(categories, null, 2));
//     })
//     .catch(error => {
//         console.log('Couldnt fetch categories: ' + error);
//     });

export default App;