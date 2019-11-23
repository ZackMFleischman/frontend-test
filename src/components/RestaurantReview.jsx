import React from 'react';
import moment from 'moment';
import Stars from '../components/atoms/Stars';
import { PropTypes } from 'prop-types';
import './RestaurantReview.scss';


const RestaurantReview = (props) => {
    const { user, text, rating, timeCreated } = props;

    const renderReviewerImage = () => (
        <div className='review-image-wrapper'>
            <img className='review-image' src={ user.image_url } alt='Reviewer Image' />
        </div>
    );

    const renderReviewerNameColumn = () => (
        <div className='review-name-column' style={ { display: 'flex', flexDirection: 'column' } }>
            <span className='review-name'>{ user.name }</span>
            <span className='review-date'>{ moment(timeCreated).format('MM/DD/YYYY') }</span>
        </div>
    );

    const renderReviewTextColumn = () => (
        <div className='review-text-column'>
            <Stars numStars={ rating } />
            <span className='review-text'>{ text }</span>
        </div>
    );

    return (
        <>
            { props.useSeparator && <hr style={ {
                width: '100%',
                margin: '60px 0'
            } } /> }
            <div className='review-wrapper'>
                { renderReviewerImage() }
                { renderReviewerNameColumn() }
                { renderReviewTextColumn() }
            </div>
        </>
    );
};

RestaurantReview.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        image_url: PropTypes.string
    }),
    text: PropTypes.string,
    rating: PropTypes.number,
    timeCreated: PropTypes.string,
    useSeparator: PropTypes.bool
};

export default RestaurantReview;