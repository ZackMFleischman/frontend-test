import { YelpActionTypes } from './YelpReducer';
import fetchReducer, { toFetchActionTypes } from './reducerUtils/FetchReducer';

const yelpCategoriesReducer = (state, action) => {
    return fetchReducer(state, action, 'categories', toFetchActionTypes([
        YelpActionTypes.FETCH_CATEGORIES_START,
        YelpActionTypes.FETCH_CATEGORIES_SUCCESS,
        YelpActionTypes.FETCH_CATEGORIES_ERROR
    ]));
}

export default yelpCategoriesReducer;