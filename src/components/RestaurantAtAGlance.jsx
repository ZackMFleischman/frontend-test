import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantAtAGlance.scss';
import Stars from './atoms/Stars';
import OpenIndicator from './OpenIndicator';

const RestaurantAtAGlance = (props) => {
    return (
        <div className='restaurant-at-a-glance'>
            <h2>{ props.name }</h2>
            <Stars numStars={ props.stars } />
            <div style={ { justifyContent: 'space-between', display: 'flex' } }>
                <div>
                    <span>{ props.category }</span>
                    <span> ● </span>
                    <span>{ props.price }</span>
                </div>
                <OpenIndicator isOpen={ props.isOpen } />
            </div>
        </div>
    );
}

RestaurantAtAGlance.propTypes = {
    name: PropTypes.string,
    stars: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    isOpen: PropTypes.bool
};

RestaurantAtAGlance.defaultProps = {
    name: 'Restaurant Name',
    stars: 4.5,
    category: 'Japanese',
    price: 3,
    isOpen: true
};

export default RestaurantAtAGlance;