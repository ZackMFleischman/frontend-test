import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantCard from './RestaurantCard';

class RestaurantCardsSection extends React.PureComponent {
    renderRestaurantCard = restaurant => {
        return (
            <RestaurantCard
                key={ restaurant.alias }
                alias={ restaurant.alias }
                name={ restaurant.name }
                stars={ restaurant.rating }
                category={ restaurant.categories[0].title }
                price={ restaurant.price }
                isOpen={ !restaurant.is_closed }
                imageUrl={ restaurant.image_url }
            />
        );
    }

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

    loadMoreButton = (
        <div>
            <button style={ { width: '200px' } } onClick={ () => this.props.onLoadMoreClicked() }>Load More</button>
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