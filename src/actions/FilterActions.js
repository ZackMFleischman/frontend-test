

import toAction from './actionUtils/ToAction';
import { FilterActionTypes } from '../reducers/FilterReducer';

export const changeSelectedCategory = (categoryAlias) => toAction(FilterActionTypes.CHANGE_SELECTED_CATEGORY, categoryAlias);