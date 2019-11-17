

import toAction from './actionUtils/ToAction';
import { FilterActionTypes } from '../reducers/FilterReducer';

export const changeSelectedCategory = (categoryAlias) => toAction(FilterActionTypes.CHANGE_SELECTED_CATEGORY, categoryAlias);
export const changeSelectedPrice = (price) => toAction(FilterActionTypes.CHANGE_SELECTED_PRICE, price);