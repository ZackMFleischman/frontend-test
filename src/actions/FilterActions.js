import toAction from './actionUtils/ToAction';
import { FilterActionTypes } from '../reducers/FilterReducer';

export const changeSelectedCategory = (categoryAlias) => toAction(FilterActionTypes.CHANGE_SELECTED_CATEGORY, categoryAlias);
export const changeSelectedPrice = (price) => toAction(FilterActionTypes.CHANGE_SELECTED_PRICE, price);
export const toggleShowOpenNow = () => toAction(FilterActionTypes.TOGGLE_SHOW_OPEN_NOW);
export const clearAllFilters = () => toAction(FilterActionTypes.CLEAR_ALL_FILTERS);