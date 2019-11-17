import toAction from './actionUtils/ToAction';
import { FilterActionTypes } from '../reducers/FilterReducer';
import { getCategoryFromFilter } from '../selectors/FilterSelectors';
import { fetchRestaurants } from './YelpActions';

export const changeSelectedPrice = (price) => toAction(FilterActionTypes.CHANGE_SELECTED_PRICE, price);
export const toggleShowOpenNow = () => toAction(FilterActionTypes.TOGGLE_SHOW_OPEN_NOW);

export const changeSelectedCategory = (categoryAlias) => (dispatch, getState) => {
    const currentCategory = getCategoryFromFilter(getState());
    if (currentCategory !== categoryAlias) {
        dispatch(toAction(FilterActionTypes.CHANGE_SELECTED_CATEGORY, categoryAlias));
        dispatch(fetchRestaurants());
    }
};

export const clearAllFilters = () => (dispatch) => {
    dispatch(toAction(FilterActionTypes.CLEAR_ALL_FILTERS));
    dispatch(fetchRestaurants());
} 