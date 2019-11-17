import { combineReducers } from 'redux';
import { getStaticCopy } from '../Copy.js';
import { yelpReducer } from './YelpReducer.js';
import { filterReducer } from './FilterReducer.js';

export const rootReducer = combineReducers({
    yelp: yelpReducer,
    filters: filterReducer,
    copy: (state = getStaticCopy()) => state
});

