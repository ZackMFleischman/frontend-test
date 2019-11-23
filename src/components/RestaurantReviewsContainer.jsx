import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurantReviews } from '../actions/YelpActions';
import { haveNotFinishedLoading } from '../reducers/reducerUtils/LoadingStatus';
import RestaurantReviews from './RestaurantReviews';

class RestaurantReviewsContainer extends React.PureComponent {
    componentDidMount() {
        this.props.fetchRestaurantReviews(this.props.restaurantAlias);
    }

    getRestaurantReviewsData = () => this.props.reviewsMap[this.props.restaurantAlias];

    getRestaurantReviews = () => {
        const reviewsData = this.getRestaurantReviewsData();
        return reviewsData ? reviewsData.reviews : [];
    }

    getTotalNumberOfReviews = () => {
        const reviewsData = this.getRestaurantReviewsData();
        return reviewsData ? reviewsData.total : 0;
    }

    render() {
        const isLoading = haveNotFinishedLoading(this.props.reviewsLoadingStatus);

        return (
            <RestaurantReviews
                isLoading={ isLoading }
                reviews={ this.getRestaurantReviews() }
                numReviews={ this.getTotalNumberOfReviews() }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    reviewsLoadingStatus: state.yelp.reviews.loadingStatus,
    reviewsMap: state.yelp.reviews.data ? state.yelp.reviews.data.restaurantReviewsMap : {},
});

const mapDispatchToProps = ({
    fetchRestaurantReviews
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantReviewsContainer);