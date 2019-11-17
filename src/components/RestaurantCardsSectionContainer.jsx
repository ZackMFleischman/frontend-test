import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreRestaurants } from '../actions/YelpActions';
import RestaurantsCardsSection from './RestaurantCardsSection';
import { getFilteredRestaurants } from '../selectors/RestaurantSelectors';

class RestaurantsCardsSectionContainer extends React.PureComponent {
    render() {
        return (
            <RestaurantsCardsSection
                onLoadMoreClicked={ this.props.fetchMoreRestaurants }
                restaurants={ this.props.restaurants }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    restaurants: getFilteredRestaurants(state),
});

const mapDispatchToProps = {
    fetchMoreRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsCardsSectionContainer);