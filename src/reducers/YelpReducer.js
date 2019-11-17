import { getNotLoadedState, getLoadingSuccessState } from './reducerUtils/LoadingStatusStates';
import { YelpActionTypes, fetchCategoriesActionTypes, fetchRestaurantsActionTypes } from '../actions/YelpActionTypes';
import fetchReducer from './reducerUtils/FetchReducer';
import { yelpRestaurantsReducer } from './YelpRestaurantsReducer';

const initialYelpState = {
    categories: getNotLoadedState(),
    restaurants: getNotLoadedState()
};

const yelpCategoriesReducer = (state, action) => fetchReducer(state, action, 'categories', fetchCategoriesActionTypes);

export const yelpReducer = (state = initialYelpState, action) => {
    switch (action.type) {
        case YelpActionTypes.FETCH_CATEGORIES_START:
        case YelpActionTypes.FETCH_CATEGORIES_SUCCESS:
        case YelpActionTypes.FETCH_CATEGORIES_ERROR:
            return yelpCategoriesReducer(state, action);

        case YelpActionTypes.FETCH_RESTAURANTS_START:
        case YelpActionTypes.FETCH_RESTAURANTS_SUCCESS:
        case YelpActionTypes.FETCH_RESTAURANTS_ERROR:
            return yelpRestaurantsReducer(state, action);

        default: return state
    }
};