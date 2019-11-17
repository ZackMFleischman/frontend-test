import { getLoadingSuccessState, getLoadingErrorState, getLoadingState } from './LoadingStatusStates';

// This is a generic reducer for any fetching action that follows the Start, Success, Error action type scheme.
const fetchReducer = (state, action, field, fetchActionTypes, successOverride) => {
    switch (action.type) {
        case fetchActionTypes.start:
            return {
                ...state,
                [field]: getLoadingState()
            };

        case fetchActionTypes.success:
            return successOverride ? successOverride(state, action) : {
                ...state,
                [field]: getLoadingSuccessState(action.payload)
            };

        case fetchActionTypes.error:
            return {
                ...state,
                [field]: getLoadingErrorState(action.error)
            };

        default: return state;
    }
};

export const toFetchActionTypes = ([start, success, error]) => ({
    start,
    success,
    error
});

export default fetchReducer;