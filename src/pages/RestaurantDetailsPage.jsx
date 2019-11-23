import React from 'react';
import RestaurantAtAGlance from '../components/RestaurantAtAGlance';
import { PropTypes } from 'prop-types';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';
import RestaurantReviewsContainer from '../components/RestaurantReviewsContainer';
import Button from '../components/atoms/Button';
import './RestaurantDetailsPage.scss';
import RestaurantMapAndImages from '../components/RestaurantMapAndImages';

const RestaurantDetailsPage = (props) => {
    const renderGoBackButton = () => (
        <div className='go-back-button' >
            <Button
                text='GO BACK'
                onClick={ props.goToMainPage }
                invertedColors
                xlarge
            />
        </div>
    );

    return (
        <div className='restaurant-details-page'>
            <RestaurantAtAGlance
                name={ props.restaurant.name }
                stars={ props.restaurant.rating }
                category={ props.restaurant.categories[0].title }
                price={ props.restaurant.price }
                isOpen={ !props.restaurant.is_closed }
                big
            />

            <hr className='full-width-hr' />

            <RestaurantMapAndImages
                photos={ props.restaurant.photos }
                location={ props.restaurant.location }
                coordinates={ props.restaurant.coordinates }
            />

            <hr className='full-width-hr' />

            <RestaurantReviewsContainer restaurantAlias={ props.restaurant.alias } reviews={ [0, 1, 2, 3, 4] } />

            { renderGoBackButton() }
        </div>
    );
};

RestaurantDetailsPage.propTypes = {
    goToMainPage: PropTypes.func,
    restaurant: PropTypes.object
}

export default withLoadingSpinner(RestaurantDetailsPage);
