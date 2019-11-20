import React from 'react';
import PropTypes from 'prop-types';

import RestaurantAtAGlance from './RestaurantAtAGlance';
import { withRouter } from 'react-router-dom';
import './RestaurantCardsSection.scss';
import Button from './atoms/Button';

export const RestaurantCard = (props) => {
    const navigateToDetailsPage = () => props.history.push(`/restaurant-details/${props.alias}`);

    const LearnMoreButton = (props) => (
        <Button
            // eslint-disable-next-line react/prop-types
            onClick={ () => props.navigateToDetailsPage() }
            text='LEARN MORE'
            invertedColors
            className='learn-more-button'
        />
    );

    const renderRestuarantAtAGlance = () => (
        <div className='at-a-glance-wrapper'>
            <RestaurantAtAGlance
                name={ props.name }
                stars={ props.stars }
                category={ props.category }
                price={ props.price }
                isOpen={ props.isOpen }
            />
        </div>
    );

    return (
        <div className='restaurant-card'>
            <div className='restaurant-card-image-wrapper'>
                <img className='restaurant-card-image' src={ props.imageUrl } alt='Restaurant Image' />
            </div>
            { renderRestuarantAtAGlance() }
            <LearnMoreButton navigateToDetailsPage={ navigateToDetailsPage } />
        </div>
    );
};

RestaurantCard.propTypes = {
    alias: PropTypes.string,
    name: PropTypes.string,
    stars: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    isOpen: PropTypes.bool,
    imageUrl: PropTypes.string,
    history: PropTypes.object,
}

export default withRouter(RestaurantCard);