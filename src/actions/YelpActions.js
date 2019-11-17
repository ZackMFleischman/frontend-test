import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import { fetchCategoriesActionTypes, fetchRestaurantsActionTypes } from './YelpActionTypes';
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
    const offset = 0;
    _fetchRestaurants(dispatch, categoryToFetch, offset);
};

export const fetchMoreRestaurants = () => (dispatch, getState) => {
    const state = getState();
    const categoryToFetch = getCategoryFromFilter(state);
    const offset = getCurrentRestaurantOffset(state);
    _fetchRestaurants(dispatch, categoryToFetch, offset);
};

const _fetchRestaurants = (dispatch, categoryToFetch, offset) => {
    return fetchData(
        () => getYelpFetcher().fetchRestaurants(categoryToFetch, offset),
        fetchRestaurantsActionTypes,
        dispatch
    );
};