import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreRestaurants } from '../actions/YelpActions';
import RestaurantsCardsSection from './RestaurantCardsSection';

class RestaurantsCardsSectionContainer extends React.PureComponent {
    render() {
        return (
            <RestaurantsCardsSection
                onLoadMoreClicked={ this.props.fetchMoreRestaurants }
                restaurants={ [0, 1, 2, 3, 4, 5, 6, 7] }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.yelp.categories.data,
});

const mapDispatchToProps = {
    fetchMoreRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsCardsSectionContainer);