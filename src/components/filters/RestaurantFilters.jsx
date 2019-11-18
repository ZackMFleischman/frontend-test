import React from 'react';

import './RestaurantFilters.scss';
import CategoryFilterContainer from './CategoryFilterContainer';
import PriceFilterContainer from './PriceFilterContainer';
import OpenNowFilterContainer from './OpenNowFilterContainer';
import ClearAllFiltersButton from './ClearAllFiltersButton';

const RestaurantFilters = (props) => {
    const FilterItem = ({ render }) => {
        return (
            <div className='restaurant-filter-item'>
                { render() }
            </div>
        );
    }

    return (
        <div className='restaurant-filter-wrapper'>
            <div className='restaurant-filter-options'>
                <FilterItem render={ () => <div className='restaurant-filter-by'>Filter By:</div> } />
                <FilterItem render={ () => <OpenNowFilterContainer /> } />
                <FilterItem render={ () => <PriceFilterContainer /> } />
                <FilterItem render={ () => <CategoryFilterContainer /> } />
            </div>
            <ClearAllFiltersButton />
        </div>
    );
}

RestaurantFilters.propTypes = {
}

RestaurantFilters.default = {}

export default RestaurantFilters;