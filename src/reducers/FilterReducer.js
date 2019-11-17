export const FilterActionTypes = {
    CHANGE_SELECTED_CATEGORY: 'CHANGE_SELECTED_CATEGORY',
    CHANGE_SELECTED_PRICE: 'CHANGE_SELECTED_PRICE'
};

const initialFilterState = {
    selectedCategory: 'all',
    selectedPrice: 'all'
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

        default: return state
    }
};