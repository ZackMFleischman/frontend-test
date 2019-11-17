import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantFilterer.scss';

const RestaurantFilterer = (props) => {
    return (
        <div className='restaurant-filterer-container'>
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

RestaurantFilterer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

RestaurantFilterer.default = {}

export default RestaurantFilterer;