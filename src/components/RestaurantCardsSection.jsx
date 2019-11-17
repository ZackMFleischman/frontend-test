import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantCard from './RestaurantCard';

class RestaurantCardsSection extends React.PureComponent {
    renderRestaurantCard = restaurantData => (
        <RestaurantCard
            key={ restaurantData }
            data={ restaurantData }
        />
    );

    renderRestaurantCards = restaurants => {
        if (restaurants)
            return restaurants.map(this.renderRestaurantCard);
        else
            return <span>No Restaurants Available</span>;
    };

    renderCardsContainer = () => (
        <div className='restaurant-cards-container'>
            { this.renderRestaurantCards(this.props.restaurants) }
        </div>
    );

    handleLoadMoreClicked = () => {
        console.log('clicked load more');
        this.props.onLoadMoreClicked();
    }

    loadMoreButton = (
        <div>
            <button style={ { width: '200px' } } onClick={ this.handleLoadMoreClicked }>Load More</button>
        </div>
    );

    render() {
        return (
            <div className='restaurant-cards-section' >
                <h2>All Restaurants</h2>
                { this.renderCardsContainer() }
                { this.loadMoreButton }
            </div>
        );
    }
}

RestaurantCardsSection.propTypes = {
    onLoadMoreClicked: PropTypes.func
}

RestaurantCardsSection.default = {}

export default RestaurantCardsSection;