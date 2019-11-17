import { getYelpFetcher } from '../fetchers/YelpFetcherFactory';
import toAction, { toActionError } from './actionUtils/ToAction';
import { YelpActionTypes } from '../reducers/YelpReducer';

export const fetchCategories = () => (dispatch) => {
    console.log('Fetching categories...');
    dispatch(toAction(YelpActionTypes.FETCH_CATEGORIES_START));
    getYelpFetcher().fetchCategories()
        .then(categoriesJson => dispatch(toAction(YelpActionTypes.FETCH_CATEGORIES_SUCCESS, categoriesJson.categories)))
        .catch(error => dispatch(toActionError(YelpActionTypes.FETCH_CATEGORIES_ERROR, error)));
};