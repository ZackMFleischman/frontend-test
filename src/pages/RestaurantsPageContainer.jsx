import React from 'react';
import { connect } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
import { fetchCategories, fetchRestaurants } from '../actions/YelpActions';
import { shouldLoad } from '../reducers/reducerUtils/LoadingStatus';
import { PropTypes } from 'prop-types';

export class RestaurantsPageContainer extends React.Component {
    componentDidMount() {
        if (shouldLoad(this.props.categoriesLoadingStatus))
            this.props.fetchCategories();

        if (shouldLoad(this.props.restaurantsLoadingStatus))
            this.props.fetchRestaurants();
    }

    render() {
        return (
            <RestaurantsPage
                headerCopy={ this.props.headerCopy }
            />
        );
    }
}

RestaurantsPageContainer.propTypes = {
    categoriesLoadingStatus: PropTypes.string,
    restaurantsLoadingStatus: PropTypes.string,
    headerCopy: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    }),
    fetchCategories: PropTypes.func,
    fetchRestaurants: PropTypes.func
}

const mapStateToProps = (state) => ({
    categoriesLoadingStatus: state.yelp.categories.loadingStatus,
    restaurantsLoadingStatus: state.yelp.restaurants.loadingStatus,
    headerCopy: {
        title: state.copy.header.title,
        description: state.copy.header.description
    }
});

const mapDispatchToProps = {
    fetchCategories,
    fetchRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsPageContainer);