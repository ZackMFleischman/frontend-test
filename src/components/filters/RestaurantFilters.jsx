import React from 'react';

import CategoryFilterContainer from './CategoryFilterContainer';
import PriceFilterContainer from './PriceFilterContainer';
import OpenNowFilterContainer from './OpenNowFilterContainer';
import ClearAllFiltersButtonContainer from './ClearAllFiltersButtonContainer';
import './RestaurantFilters.scss';

const RestaurantFilters = () => {
    // eslint-disable-next-line react/prop-types
    const FilterItem = ({ render }) => (
        <div className='restaurant-filter-item'>
            { render() }
        </div>
    );

    const renderFilters = () => (
        <div className='restaurant-filter-wrapper'>
            <div className='restaurant-filter-options'>
                <FilterItem render={ () => <div className='restaurant-filter-by'>Filter By:</div> } />
                <FilterItem render={ () => <OpenNowFilterContainer /> } />
                <FilterItem render={ () => <PriceFilterContainer /> } />
                <FilterItem render={ () => <CategoryFilterContainer /> } />
            </div>
            <ClearAllFiltersButtonContainer />
        </div>
    );

    return (
        <>
            <hr className='restaurant-filter-hr' />
            { renderFilters() }
            <hr className='restaurant-filter-hr' />
        </>
    );
}

export default RestaurantFilters;