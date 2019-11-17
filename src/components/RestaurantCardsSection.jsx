import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';

const RestaurantCard = (props) => {
    return <div className='restaurant-card'>{ props.title }</div>
};

const RestaurantCardsSection = (props) => {
    return (
        <div className='restaurant-cards-section'>
            <h2>All Restaurants</h2>
            <div className='restaurant-cards-container'>
                <RestaurantCard title={ 'card 1' } />
                <RestaurantCard title={ 'card 2' } />
                <RestaurantCard title={ 'card 3' } />
                <RestaurantCard title={ 'card 4' } />
                <RestaurantCard title={ 'card 5' } />
                <RestaurantCard title={ 'card 6' } />
                <RestaurantCard title={ 'card 7' } />
                <RestaurantCard title={ 'card 8' } />
            </div>
            <div>
                <button style={ { width: '200px' } }>Load More</button>
            </div>
        </div>
    );
}

RestaurantCardsSection.propTypes = {}
RestaurantCardsSection.default = {}

export default RestaurantCardsSection;