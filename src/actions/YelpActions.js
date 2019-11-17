import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import toAction, { toActionError } from './actionUtils/ToAction';
import { YelpActionTypes } from '../reducers/YelpReducer';

export const fetchCategories = () => (dispatch) => {
    dispatch(toAction(YelpActionTypes.FETCH_CATEGORIES_START));
    getYelpFetcher().fetchUSRestaurantCategories()
        .then(restaurantCategories => dispatch(toAction(YelpActionTypes.FETCH_CATEGORIES_SUCCESS, restaurantCategories)))
        .catch(error => dispatch(toActionError(YelpActionTypes.FETCH_CATEGORIES_ERROR, error)));
};