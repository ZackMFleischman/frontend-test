import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Header from '../components/atoms/Header';
import RestaurantFilters from '../components/filters/RestaurantFilters';
import RestaurantCardsSection from '../components/RestaurantCardsSection';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';

import './RestaurantsPage.scss';

const RestaurantsPage = (props) => {
    return (
        <div className='restaurants-page'>
            <Header title={ props.headerTitle } description={ props.headerDescription } className="restaurant-header" />
            <RestaurantFilters />
            <RestaurantCardsSection restaurants={ [0, 1, 2, 3, 4, 5, 6, 7] } />
            <button onClick={ () => props.history.push('/restaurant-details/123456') }>Go to details page</button>
        </div>
    );
};

RestaurantsPage.propsTypes = {
    categories: PropTypes.object,
    error: PropTypes.object,
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string
}

export default compose(
    withLoadingSpinner,
    withRouter
)(RestaurantsPage);