import React from 'react';
import { connect } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
import { fetchCategories } from '../actions/YelpActions';
import { isNotLoaded } from '../reducers/reducerUtils/LoadingStatus';

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
                headerTitle={ this.props.headerTitle }
                headerDescription={ this.props.headerDescription }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: isNotLoaded(state.yelp.categories),
    categories: state.yelp.categories.data,
    error: state.yelp.categories.error,
    headerTitle: state.copy.header.title,
    headerDescription: state.copy.header.description
});

const mapDispatchToProps = {
    fetchCategories
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsPageContainer);