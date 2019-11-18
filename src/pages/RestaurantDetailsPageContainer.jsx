import React from 'react';
import { connect } from 'react-redux';
import { getRestaurantMap } from '../selectors/RestaurantSelectors';
import RestaurantsDetailsPage from './RestaurantDetailsPage';
import { withRouter, useParams } from 'react-router-dom';
import { fetchCategories, fetchRestaurant } from '../actions/YelpActions';
import { haveNotFinishedLoading, shouldLoad } from '../reducers/reducerUtils/LoadingStatus';

class RestaurantDetailsPageContainer extends React.PureComponent {
    getRestaurantAliasFromUrl = () => this.props.match.params.restaurantAlias;

    componentDidMount() {
        if (shouldLoad(this.props.restaurantsLoadingStatus))
            this.props.fetchRestaurant(this.getRestaurantAliasFromUrl());
    }

    goToMainPage = () => this.props.history.push('/');

    getRestaurantDataFromUrl = () => {
        const restaurantAlias = this.getRestaurantAliasFromUrl();
        if (restaurantAlias !== 'undefined' && this.props.restaurantMap)
            return this.props.restaurantMap[restaurantAlias];
        else
            return undefined;
    }

    render() {
        const isLoading = haveNotFinishedLoading(this.props.restaurantsLoadingStatus);

        return (
            <RestaurantsDetailsPage
                isLoading={ isLoading }
                goToMainPage={ this.goToMainPage }
                restaurant={ this.getRestaurantDataFromUrl() }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    restaurantsLoadingStatus: state.yelp.restaurants.loadingStatus,
    restaurantMap: getRestaurantMap(state),
});

const mapDispatchToProps = ({
    fetchRestaurant
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(RestaurantDetailsPageContainer));