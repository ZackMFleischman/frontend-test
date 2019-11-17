import { getNotLoadedState } from './reducerUtils/LoadingStatusStates';
import yelpCategoriesReducer from './YelpCategoriesReducer';

export const YelpActionTypes = {
    FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR',
};

const initialYelpState = {
    categories: getNotLoadedState()
};

export const yelpReducer = (state = initialYelpState, action) => {
    switch (action.type) {
        case YelpActionTypes.FETCH_CATEGORIES_START:
        case YelpActionTypes.FETCH_CATEGORIES_SUCCESS:
        case YelpActionTypes.FETCH_CATEGORIES_ERROR:
            return yelpCategoriesReducer(state, action);

        default: return state
    }
};