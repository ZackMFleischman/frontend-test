/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreRestaurants } from '../actions/YelpActions';
import RestaurantsCardsSection from './RestaurantCardsSection';
import { getFilteredRestaurants, getCurrentRestaurantCategoryDisplayText } from '../selectors/RestaurantSelectors';

const RestaurantsCardsSectionContainer = (props) => {
    const newProps = {
        ...props,
        onLoadMoreClicked: props.fetchMoreRestaurants
    };

    return <RestaurantsCardsSection { ...newProps } />;
}

const mapStateToProps = (state) => ({
    restaurants: getFilteredRestaurants(state),
    title: getCurrentRestaurantCategoryDisplayText(state),
    restaurantsLoadingStatus: state.yelp.restaurants.loadingStatus
});

const mapDispatchToProps = {
    fetchMoreRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsCardsSectionContainer);