export const FilterActionTypes = {
    CHANGE_SELECTED_CATEGORY: 'CHANGE_SELECTED_CATEGORY'
};

const initialFilterState = {
    selectedCategory: 'all'
};

export const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case FilterActionTypes.CHANGE_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            };

        default: return state
    }
};