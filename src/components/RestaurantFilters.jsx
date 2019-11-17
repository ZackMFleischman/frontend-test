import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantFilters.scss';
import CategoryFilterContainer from './CategoryFilterContainer';

const RestaurantFilters = (props) => {
    return (
        <div className='restaurant-filter-wrapper'>
            <div className='restaurant-filter-options'>
                <span>Filter By:  </span>
                <span> () Open Now </span>
                <span> Price </span>
                <CategoryFilterContainer />
            </div>
            <button>Clear All</button>
        </div>
    );
}

RestaurantFilters.propTypes = {
}

RestaurantFilters.default = {}

export default RestaurantFilters;