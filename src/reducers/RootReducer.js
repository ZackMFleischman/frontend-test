import { combineReducers } from 'redux';
import { getStaticCopy } from '../Copy.js';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTER': return state + 1
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    copy: (state = getStaticCopy()) => state
});

