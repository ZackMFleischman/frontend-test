import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import { fetchCategoriesActionTypes, fetchRestaurantsActionTypes, fetchMoreRestaurantsActionTypes } from './YelpActionTypes';
import fetchData from './actionUtils/FetchData';
import { getCurrentRestaurantOffset } from '../selectors/RestaurantSelectors';
import { getCategoryFromFilter } from '../selectors/FilterSelectors';

export const fetchCategories = () => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchUSRestaurantCategories(),
        fetchCategoriesActionTypes,
        dispatch
    );
};

export const fetchRestaurants = () => (dispatch, getState) => {
    const categoryToFetch = getCategoryFromFilter(getState());
    return fetchData(
        () => getYelpFetcher().fetchRestaurants(categoryToFetch),
        fetchRestaurantsActionTypes,
        dispatch
    );
};

export const fetchMoreRestaurants = () => (dispatch, getState) => {
    const state = getState();
    const categoryToFetch = getCategoryFromFilter(state);
    const offset = getCurrentRestaurantOffset(state);

    return fetchData(
        () => getYelpFetcher().fetchRestaurants(categoryToFetch, offset),
        fetchMoreRestaurantsActionTypes,
        dispatch
    );
};