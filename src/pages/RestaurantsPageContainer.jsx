import React from 'react';
import { connect } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
import { fetchCategories } from '../actions/YelpActions';
import { isNotLoaded } from '../reducers/reducerUtils/LoadingStatus';
import { PropTypes } from 'prop-types';

class RestaurantsPageContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <RestaurantsPage
                isLoading={ this.props.isLoading }
                categories={ this.props.categories }
                error={ this.props.error }
            />
        );
    }
}

RestaurantsPageContainer.propsTypes = {
    isLoading: PropTypes.bool,
    categories: PropTypes.object,
    error: PropTypes.object
}

const mapStateToProps = (state) => ({
    isLoading: isNotLoaded(state.yelp.categories),
    categories: state.yelp.categories.data,
    error: state.yelp.categories.error
});

const mapDispatchToProps = {
    fetchCategories
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsPageContainer);