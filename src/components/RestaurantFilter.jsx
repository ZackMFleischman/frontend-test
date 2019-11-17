import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantFilter.scss';

const RestaurantFilter = (props) => {
    return (
        <div className='restaurant-filter-container'>
            <div className='restaurant-filter-options'>
                <span>Filter By:</span>
                <div>Open Now</div>
                <div>Price</div>
                <div>Categories</div>
            </div>
            <button>Clear All</button>
        </div>
    );
}

RestaurantFilter.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

RestaurantFilter.default = {}

export default RestaurantFilter;