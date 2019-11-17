import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantAtAGlance from './RestaurantAtAGlance';

const RestaurantCard = (props) => {
    return (
        <div className='restaurant-card'>
            <img style={ { maxHeight: '200px' } } src={ props.imageUrl } alt='Restaurant Image' />
            <RestaurantAtAGlance
                name={ props.name }
                stars={ props.stars }
                category={ props.category }
                price={ props.price }
                isOpen={ props.isOpen }
            />
        </div>
    );
};

RestaurantCard.propTypes = {
    name: PropTypes.string,
    stars: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    isOpen: PropTypes.bool,
    imageUrl: PropTypes.string
}

export default RestaurantCard;