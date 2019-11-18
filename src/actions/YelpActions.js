import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import { fetchCategoriesActionTypes, fetchRestaurantsActionTypes, fetchMoreRestaurantsActionTypes, fetchRestaurantReviewsActionTypes } from './YelpActionTypes';
import fetchData from './actionUtils/FetchData';
import { getCurrentRestaurantOffset } from '../selectors/RestaurantSelectors';
import { getCategoryFilter } from '../selectors/FilterSelectors';

export const fetchCategories = () => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchUSRestaurantCategories(),
        fetchCategoriesActionTypes,
        dispatch
    );
};

export const fetchRestaurants = () => (dispatch, getState) => {
    const categoryToFetch = getCategoryFilter(getState());
    return fetchData(
        () => getYelpFetcher().fetchRestaurants(categoryToFetch),
        fetchRestaurantsActionTypes,
        dispatch
    );
};

export const fetchRestaurant = (restaurantIdOrAlias) => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchRestaurant(restaurantIdOrAlias),
        fetchMoreRestaurantsActionTypes,
        dispatch
    );
};

export const fetchMoreRestaurants = () => (dispatch, getState) => {
    const state = getState();
    const categoryToFetch = getCategoryFilter(state);
    const offset = getCurrentRestaurantOffset(state);

    return fetchData(
        () => getYelpFetcher().fetchRestaurants(categoryToFetch, offset),
        fetchMoreRestaurantsActionTypes,
        dispatch
    );
};

export const fetchRestaurantReviews = (restaurantIdOrAlias) => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchRestaurantReviews(restaurantIdOrAlias),
        fetchRestaurantReviewsActionTypes,
        dispatch
    );
};