import React from 'react';
import { PropTypes } from 'prop-types';

import Header from '../components/atoms/Header';
import RestaurantFilters from '../components/filters/RestaurantFilters';
import RestaurantCardsSectionContainer from '../components/RestaurantCardsSectionContainer';

import './RestaurantsPage.scss';

const RestaurantsPage = (props) => {
    const renderHeader = () => {
        return (
            <Header
                className='restaurant-header'
                title={ props.headerCopy.title }
                description={ props.headerCopy.description }
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
    headerCopy: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
}


export default RestaurantsPage;