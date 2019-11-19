import React from 'react';
import PropTypes from 'prop-types';

import RestaurantAtAGlance from './RestaurantAtAGlance';
import { withRouter } from 'react-router-dom';
import './RestaurantCardsSection.scss';

const RestaurantCard = (props) => {
    const navigateToDetailsPage = () => props.history.push(`/restaurant-details/${props.alias}`);

    const LearnMoreButton = (props) => {
        // eslint-disable-next-line react/prop-types
        return <button onClick={ () => props.navigateToDetailsPage() }>LEARN MORE</button>;
    };

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