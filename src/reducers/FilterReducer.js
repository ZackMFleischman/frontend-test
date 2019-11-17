export const FilterActionTypes = {
    CHANGE_SELECTED_CATEGORY: 'CHANGE_SELECTED_CATEGORY',
    CHANGE_SELECTED_PRICE: 'CHANGE_SELECTED_PRICE',
    TOGGLE_SHOW_OPEN_NOW: 'TOGGLE_SHOW_OPEN_NOW',
    CLEAR_ALL_FILTERS: 'CLEAR_ALL_FILTERS'
};

const initialFilterState = {
    selectedCategory: 'all',
    selectedPrice: 'all',
    onlyShowOpenNow: false
};

export const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case FilterActionTypes.CHANGE_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };

        case FilterActionTypes.CHANGE_SELECTED_PRICE:
            return {
                ...state,
                selectedPrice: action.payload
            };

        case FilterActionTypes.TOGGLE_SHOW_OPEN_NOW:
            return {
                ...state,
                onlyShowOpenNow: !state.onlyShowOpenNow
            };

        case FilterActionTypes.CLEAR_ALL_FILTERS:
            return initialFilterState;

        default: return state
    }
};