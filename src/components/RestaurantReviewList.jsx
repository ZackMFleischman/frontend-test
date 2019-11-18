import React from 'react';
import Stars from '../components/atoms/Stars';
import { PropTypes } from 'prop-types';

const RestaurantReview = (props) => {
    const { user, text, rating, time_created } = props.review;
    return (
        <>
            { props.useSeparator && <hr /> }
            <div>
                <img style={ { maxHeight: '100px' } } src={ user.image_url } alt='Reviewer Image'></img>
                <div style={ { display: 'flex', flexDirection: 'column' } }>
                    <span>{ user.name }</span>
                    <span>{ time_created }</span>
                </div>
                <div>
                    <Stars numStars={ rating } />
                    <p>{ text }</p>
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