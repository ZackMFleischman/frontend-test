import React from 'react';

import './RestaurantFilters.scss';
import CategoryFilterContainer from './CategoryFilterContainer';
import PriceFilterContainer from './PriceFilterContainer';
import OpenNowFilterContainer from './OpenNowFilterContainer';
import ClearAllFiltersButton from './ClearAllFiltersButton';

const RestaurantFilters = (props) => {
    return (
        <div className='restaurant-filter-wrapper'>
            <div className='restaurant-filter-options'>
                <span>Filter By:  </span>
                <OpenNowFilterContainer />
                <PriceFilterContainer />
                <CategoryFilterContainer />
            </div>
            <ClearAllFiltersButton />
        </div>
    );
}

RestaurantFilters.propTypes = {
}

RestaurantFilters.default = {}

export default RestaurantFilters;