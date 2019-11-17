import React from 'react';

import './RestaurantFilters.scss';
import CategoryFilterContainer from './CategoryFilterContainer';
import PriceFilterContainer from './PriceFilterContainer';

const RestaurantFilters = (props) => {
    return (
        <div className='restaurant-filter-wrapper'>
            <div className='restaurant-filter-options'>
                <span>Filter By:  </span>
                <span> () Open Now </span>
                <PriceFilterContainer />
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