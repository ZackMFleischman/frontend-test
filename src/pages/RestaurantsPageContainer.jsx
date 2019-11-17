import React from 'react';
import { connect } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
import { fetchCategories, fetchRestaurants } from '../actions/YelpActions';
import { haveNotFinishedLoading, shouldLoad } from '../reducers/reducerUtils/LoadingStatus';

class RestaurantsPageContainer extends React.Component {
    componentDidMount() {
        if (shouldLoad(this.props.categoriesLoadingStatus))
            this.props.fetchCategories();

        if (shouldLoad(this.props.restaurantsLoadingStatus))
            this.props.fetchRestaurants(this.props.selectedCategory);
    }

    render() {
        const isLoading = haveNotFinishedLoading(this.props.categoriesLoadingStatus)

        return (
            <RestaurantsPage
                isLoading={ isLoading }
                categories={ this.props.categories }
                error={ this.props.error }
                headerTitle={ this.props.headerTitle }
                headerDescription={ this.props.headerDescription }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.yelp.categories.data,
    categoriesLoadingStatus: state.yelp.categories.loadingStatus,
    restaurantsLoadingStatus: state.yelp.restaurants.loadingStatus,
    selectedCategory: state.filters.selectedCategory,
    error: state.yelp.categories.error,
    headerTitle: state.copy.header.title,
    headerDescription: state.copy.header.description
});

const mapDispatchToProps = {
    fetchCategories,
    fetchRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsPageContainer);