import React from 'react';
import Stars from '../components/atoms/Stars';
import { PropTypes } from 'prop-types';

const RestaurantReview = (props) => {
    return (
        <>
            { props.useSeparator && <hr /> }
            <div>
                <span>[Image]</span>
                <div style={ { display: 'flex', flexDirection: 'column' } }>
                    <span>Name</span>
                    <span>Date</span>
                </div>
                <div>
                    <Stars numStars={ 3 } />
                    <p>this is the review text, this is the review text, this is the review text, this is the review text, this is the review text, this is the review text, this is the review text, this is the review text</p>
                </div>
            </div>
        </>
    );
};

const RestaurantReviewList = (props) => {
    if (!props.reviews) return null;

    return props.reviews.map((review, index) => (
        <RestaurantReview
            key={ review.id }
            useSeparator={ index !== 0 }
            review={ review }
        />
    ));
}

export default RestaurantReviewList;