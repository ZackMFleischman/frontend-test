import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Header from '../components/atoms/Header';
import RestaurantFilters from '../components/filters/RestaurantFilters';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';
import RestaurantCardsSectionContainer from '../components/RestaurantCardsSectionContainer';

import './RestaurantsPage.scss';

const RestaurantsPage = (props) => {
    return (
        <div className='restaurants-page'>
            <Header title={ props.headerTitle } description={ props.headerDescription } className="restaurant-header" />
            <RestaurantFilters />
            <RestaurantCardsSectionContainer />
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