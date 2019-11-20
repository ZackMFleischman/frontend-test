import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantCard from './RestaurantCard';
import Button from './atoms/Button';
import { haveNotFinishedLoading } from '../reducers/reducerUtils/LoadingStatus';
import LoadingSpinner from './atoms/LoadingSpinner';

class RestaurantCardsSection extends React.PureComponent {
    renderRestaurantCard = restaurant => {
        return (
            <RestaurantCard
                key={ restaurant.id }
                alias={ restaurant.alias }
                name={ restaurant.name }
                stars={ restaurant.rating }
                category={ restaurant.categories[0].title }
                price={ restaurant.price || '' }
                isOpen={ !restaurant.is_closed }
                imageUrl={ restaurant.image_url }
            />
        );
    }

    areThereAnyRestaurants = () => this.props.restaurants.length > 0;

    renderRestaurantCards = () => {
        if (this.areThereAnyRestaurants())
            return this.props.restaurants.map(this.renderRestaurantCard);
        else
            return <div className='no-restaurants-available'>No Restaurants Available :(</div>;
    };

    haveRestaurantsLoaded = () => !haveNotFinishedLoading(this.props.restaurantsLoadingStatus);

    renderCardsContainer = () => {
        if (this.haveRestaurantsLoaded())
            return (
                <div className='restaurant-cards-container'>
                    { this.renderRestaurantCards() }
                </div>
            );
        else
            return <LoadingSpinner />;
    };

    loadMoreButton = () => {
        const cantLoadMore = (
            !this.areThereAnyRestaurants() ||
            !this.haveRestaurantsLoaded() ||
            !this.props.canLoadMore
        );

        return (
            <Button
                text='LOAD MORE'
                disabled={ cantLoadMore }
                onClick={ () => this.props.onLoadMoreClicked() }
                className='load-more-button'
                xlarge
            />
        );
    }

    renderTitle() {
        return <div className='restaurant-cards-section-title'>{ this.props.title }</div>
    }

    render() {
        return (
            <div className='restaurant-cards-section' >
                { this.renderTitle() }
                { this.renderCardsContainer() }
                { this.loadMoreButton() }
            </div>
        );
    }
}

RestaurantCardsSection.propTypes = {
    title: PropTypes.string,
    restaurants: PropTypes.array,
    restaurantsLoadingStatus: PropTypes.string,
    canLoadMore: PropTypes.bool,
    onLoadMoreClicked: PropTypes.func
}

export default RestaurantCardsSection;