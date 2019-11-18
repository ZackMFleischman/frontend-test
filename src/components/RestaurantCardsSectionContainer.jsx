import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreRestaurants } from '../actions/YelpActions';
import RestaurantsCardsSection from './RestaurantCardsSection';
import { getFilteredRestaurants, getCurrentRestaurantCategoryDisplayText } from '../selectors/RestaurantSelectors';

class RestaurantsCardsSectionContainer extends React.PureComponent {
    render() {
        return (
            <RestaurantsCardsSection
                title={ this.props.title }
                onLoadMoreClicked={ this.props.fetchMoreRestaurants }
                restaurants={ this.props.restaurants }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    restaurants: getFilteredRestaurants(state),
    title: getCurrentRestaurantCategoryDisplayText(state)//'All Restaurants' // TODO: Change to pull from current category
});

const mapDispatchToProps = {
    fetchMoreRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsCardsSectionContainer);