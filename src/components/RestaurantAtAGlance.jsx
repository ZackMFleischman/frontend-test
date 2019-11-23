import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantAtAGlance.scss';
import Stars from './atoms/Stars';
import OpenIndicator from './OpenIndicator';

const RestaurantAtAGlance = (props) => {
    const getClass = (className) => `${className}${props.big ? ' big' : ''}`;

    return (
        <div className='restaurant-at-a-glance'>
            <div className={ getClass('at-a-glance-name') }>{ props.name }</div>
            <Stars numStars={ props.stars } big={ props.big } />
            <div className={ getClass('at-a-glance-details') } >
                <div className={ getClass('at-a-glance-text') }>
                    <span>{ props.category }</span>
                    <span style={ { fontSize: '0.2em', padding: '0 0.4em' } }>   ●   </span>
                    <span >{ props.price }</span>
                </div>
                <OpenIndicator isOpen={ props.isOpen } big={ props.big } />
            </div>
        </div>
    );
}

RestaurantAtAGlance.propTypes = {
    name: PropTypes.string,
    stars: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    isOpen: PropTypes.bool,
    big: PropTypes.bool
};

RestaurantAtAGlance.defaultProps = {
    name: 'Restaurant Name',
    stars: 4.5,
    category: 'Japanese',
    price: '',
    isOpen: true,
    big: false
};

export default RestaurantAtAGlance;