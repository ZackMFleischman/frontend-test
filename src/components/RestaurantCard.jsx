import React from 'react';
import PropTypes from 'prop-types';

import './RestaurantCardsSection.scss';
import RestaurantAtAGlance from './RestaurantAtAGlance';
import { withRouter } from 'react-router-dom';

const LearnMoreButton = (props) => {
    return <button onClick={ () => props.navigateToDetailsPage() }>LEARN MORE</button>;
};

const RestaurantCard = (props) => {
    const navigateToDetailsPage = () => props.history.push(`/restaurant-details/${props.alias}`);

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
            <LearnMoreButton
                navigateToDetailsPage={ navigateToDetailsPage }
            />
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
    imageUrl: PropTypes.string
}

export default withRouter(RestaurantCard);