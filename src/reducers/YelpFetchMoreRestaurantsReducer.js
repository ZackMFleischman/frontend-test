import { YelpActionTypes } from '../actions/YelpActionTypes';
import LoadingStatus from './reducerUtils/LoadingStatus';

export const yelpFetchMoreRestaurantsReducer = (state, action) => {
    switch (action.type) {
        case YelpActionTypes.FETCH_MORE_RESTAURANTS_START:
            return {
                ...state,
                restaurants: {
                    loadingStatus: LoadingStatus.LOADING,
                    data: state.restaurants.data
                }
            };

        case YelpActionTypes.FETCH_MORE_RESTAURANTS_SUCCESS:
            const existingRestaurantMap = state.restaurants.data ? state.restaurants.data.restaurantMap : {};

            return {
                ...state,
                restaurants: {
                    loadingStatus: LoadingStatus.LOADED_SUCCESSFULLY,
                    data: {
                        ...state.restaurants.data,
                        ...action.payload,
                        restaurantMap: {
                            ...existingRestaurantMap,
                            ...action.payload.restaurantMap,
                        }
                    }
                }
            };

        case YelpActionTypes.FETCH_MORE_RESTAURANTS_ERROR:
            return {
                ...state,
                restaurants: {
                    loadingStatus: LoadingStatus.LOADING_ERROR,
                    data: state.restaurants.data,
                    error: action.error
                }
            };

        default: return state;
    }
};