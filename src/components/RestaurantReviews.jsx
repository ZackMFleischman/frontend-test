import React from 'react';
import { PropTypes } from 'prop-types';
import RestaurantReviewList from './RestaurantReviewList';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';

const RestaurantReviews = (props) => {
    const numReviewsText = `${props.numReviews} Review${props.numReviews !== 1 ? 's' : ''}`;

    return (
        <div>
            <span>{ numReviewsText }</span>
            <RestaurantReviewList reviews={ props.reviews } />
        </div>
    );
}

RestaurantReviews.propTypes = {
    reviews: PropTypes.array,
    numReviews: PropTypes.number
};

export default withLoadingSpinner(RestaurantReviews);