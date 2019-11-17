import { combineReducers } from 'redux';
import { getStaticCopy } from '../Copy.js';
import { yelpReducer } from './YelpReducer.js';

export const rootReducer = combineReducers({
    yelp: yelpReducer,
    copy: (state = getStaticCopy()) => state
});

