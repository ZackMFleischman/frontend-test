import React from 'react';
import { PropTypes } from 'prop-types';

import Header from '../components/atoms/Header';
import RestaurantFilters from '../components/filters/RestaurantFilters';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';
import RestaurantCardsSectionContainer from '../components/RestaurantCardsSectionContainer';

import './RestaurantsPage.scss';

const RestaurantsPage = (props) => {
    const renderHeader = () => {
        return (
            <Header
                className='restaurant-header'
                title={ props.headerTitle }
                description={ props.headerDescription }
            />
        );
    };

    return (
        <div className='restaurants-page'>
            { renderHeader() }
            <RestaurantFilters />
            <RestaurantCardsSectionContainer />
        </div>
    );
};

RestaurantsPage.propTypes = {
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string,
    categories: PropTypes.object,
    error: PropTypes.object,
}


export default withLoadingSpinner(RestaurantsPage);