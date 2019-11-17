import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import { fetchCategoriesActionTypes, fetchRestaurantsActionTypes } from './YelpActionTypes';
import fetchData from './actionUtils/FetchData';

export const fetchCategories = () => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchUSRestaurantCategories(),
        fetchCategoriesActionTypes,
        dispatch
    );
};

export const fetchRestaurants = (category) => (dispatch) => {
    return fetchData(
        () => getYelpFetcher().fetchRestaurants(category),
        fetchRestaurantsActionTypes,
        dispatch
    );
};