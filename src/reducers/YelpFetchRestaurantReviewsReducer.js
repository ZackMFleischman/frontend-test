import { YelpActionTypes } from '../actions/YelpActionTypes';
import LoadingStatus from './reducerUtils/LoadingStatus';

export const yelpFetchRestaurantReviewsReducer = (state, action) => {
    switch (action.type) {
        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_START:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    loadingStatus: LoadingStatus.LOADING,
                }
            };

        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_SUCCESS:
            const existingReviewsMap = state.reviews.data ? state.reviews.data.restaurantReviewsMap : {}
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    loadingStatus: LoadingStatus.LOADED_SUCCESSFULLY,
                    data: {
                        restaurantReviewsMap: {
                            ...existingReviewsMap,
                            ...action.payload
                        }
                    }
                }
            };

        case YelpActionTypes.FETCH_RESTAURANT_REVIEWS_ERROR:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    loadingStatus: LoadingStatus.LOADING_ERROR,
                    error: action.error
                }
            };

        default: return state;
    }
};