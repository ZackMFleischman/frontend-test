import React from 'react';
import { PropTypes } from 'prop-types';
import RestaurantReview from './RestaurantReview';

const RestaurantReviewList = (props) => {
    if (!props.reviews) return null;

    return props.reviews.map((review, index) => (
        <RestaurantReview
            key={ review.id }
            useSeparator={ index !== 0 }
            user={ review.user }
            text={ review.text }
            rating={ review.rating }
            timeCreated={ review.time_created }
        />
    ));
}

RestaurantReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object)
};

export default RestaurantReviewList;