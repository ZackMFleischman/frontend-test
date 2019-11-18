import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import RestaurantAtAGlance from '../components/RestaurantAtAGlance';
import Stars from '../components/atoms/Stars';
import { PropTypes } from 'prop-types';
import withLoadingSpinner from '../hocs/WithLoadingSpinner';

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
    return props.reviews.map((review, index) => (
        <RestaurantReview
            key={ review }
            useSeparator={ index !== 0 }
            review={ review }
        />
    ));
}

const RestaurantReviews = (props) => {
    return (
        <div>
            <span>{ props.numReviews } Reviews</span>
            <RestaurantReviewList reviews={ props.reviews } />
        </div>
    );
}

const RestaurantDetailsPage = (props) => {
    return (
        <div className='restaurant-details-page'>
            <RestaurantAtAGlance
                name={ props.restaurant.name }
                stars={ props.restaurant.rating }
                category={ props.restaurant.categories[0].title }
                price={ props.restaurant.price }
                isOpen={ !props.restaurant.is_closed }
            />
            <hr />
            <RestaurantReviews reviews={ [0, 1, 2, 3, 4] } />
            <button onClick={ () => props.goToMainPage() }>Go to main page</button>
        </div>
    );
};

RestaurantDetailsPage.propTypes = {
    goToMainPage: PropTypes.func,
    restaurant: PropTypes.object
}

export default withLoadingSpinner(RestaurantDetailsPage);
