import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantAtAGlance.scss';
import Stars from './atoms/Stars';
import OpenIndicator from './OpenIndicator';

const RestaurantAtAGlance = (props) => {
    return (
        <div className='restaurant-at-a-glance'>
            <div className='at-a-glance-name'>{ props.name }</div>
            <Stars numStars={ props.stars } />
            <div className='at-a-glance-details'>
                <div className='at-a-glance-text'>
                    <span>{ props.category }</span>
                    <span style={ { fontSize: '0.2em', padding: '0 0.4em' } }>   ●   </span>
                    <span >{ props.price }</span>
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
    price: '',
    isOpen: true
};

export default RestaurantAtAGlance;