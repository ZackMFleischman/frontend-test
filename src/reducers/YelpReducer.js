import { getNotLoadedState } from './reducerUtils/LoadingStatusStates';
import { YelpActionTypes, fetchCategoriesActionTypes, fetchRestaurantsActionTypes } from '../actions/YelpActionTypes';
import fetchReducer from './reducerUtils/FetchReducer';
import { yelpFetchMoreRestaurantsReducer } from './YelpFetchMoreRestaurantsReducer';
import { yelpFetchRestaurantReviewsReducer } from './YelpFetchRestaurantReviewsReducer';

const initialYelpState = {
    categories: getNotLoadedState(),
    restaurants: getNotLoadedState(),
    reviews: getNotLoadedState()
};

const yelpCategoriesReducer = (state, action) => fetchReducer(state, action, 'categories', fetchCategoriesActionTypes);
const yelpFetchRestaurantsReducer = (state, action) => fetchReducer(state, action, 'restaurants', fetchRestaurantsActionTypes);

export const yelpReducer = (state = initialYelpState, action) => {
    switch (action.type) {
        case YelpActionTypes.FETCH_CATEGORIES_START:
        case YelpActionTypes.FETCH_CATEGORIES_SUCCESS:
        case YelpActionTypes.FETCH_CATEGORIES_ERROR:
            return yelpCategoriesReducer(state, action);

        case YelpActionTypes.FETCH_RESTAURANTS_START:
        case YelpActionTypes.FETCH_RESTAURANTS_SUCCESS:
        case YelpActionTypes.FETCH_RESTAURANTS_ERROR:
            return yelpFetchRestaurantsReducer(state, action);

        case YelpActionTypes.FETCH_MORE_RESTAURANTS_START:
        case YelpActionTypes.FETCH_MORE_RESTAURANTS_SUCCESS:
        case YelpActionTypes.FETCH_MORE_RESTAURANTS_ERROR:
            return yelpFetchMoreRestaurantsReducer(state, action);

        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_START:
        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_SUCCESS:
        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_ERROR:
            return yelpFetchRestaurantReviewsReducer(state, action);

        default: return state
    }
};