import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import RestaurantAtAGlance from '../components/RestaurantAtAGlance';
import Stars from '../components/Stars';

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
    const { restaurantId } = useParams();

    return (
        <div className='restaurant-details-page'>
            <RestaurantAtAGlance id={ restaurantId } />
            <hr />
            <RestaurantReviews reviews={ [0, 1, 2, 3, 4] } />
            <button onClick={ () => props.history.push('/') }>Go to main page</button>
        </div>
    );
};

export default withRouter(RestaurantDetailsPage);