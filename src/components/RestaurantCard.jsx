import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantAtAGlance from './RestaurantAtAGlance';

const RestaurantCard = (props) => {
    return (
        <div className='restaurant-card'>
            <div>[Image]</div>
            <RestaurantAtAGlance />
        </div>
    );
};

export default RestaurantCard;