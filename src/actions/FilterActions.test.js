import { clearAllFilters, changeSelectedCategory } from "./FilterActions";
import { FilterActionTypes } from "../reducers/FilterReducer";

const mockFetchRestaurants = { type: 'MOCK_FETCH_RESTAURANTS' };
jest.mock('./YelpActions', () => ({
    fetchRestaurants: () => mockFetchRestaurants
}));

const mockCategoryFilter = 'mock category';
jest.mock('../selectors/FilterSelectors', () => ({
    getCategoryFilter: () => mockCategoryFilter
}));

describe('filter action tests', () => {
    const dispatch = jest.fn();
    beforeEach(() => dispatch.mockClear());

    it('clearAllFilters should dispatch the correct action and then fetchRestaurants', () => {
        clearAllFilters()(dispatch);

        expect(dispatch.mock.calls[0][0]).toEqual({ type: FilterActionTypes.CLEAR_ALL_FILTERS });
        expect(dispatch.mock.calls[1][0]).toEqual(mockFetchRestaurants);
    });

    it('changeSelectedCategory should not dispatch anything if the category is already chosen', () => {
        changeSelectedCategory(mockCategoryFilter)(dispatch, jest.fn());
        expect(dispatch).not.toHaveBeenCalled();
    });

    it('changeSelectedCategory should dispatch the change category action and then fetchRestaurants', () => {
        const newCategory = 'new category';
        changeSelectedCategory(newCategory)(dispatch, jest.fn());

        expect(dispatch.mock.calls[0][0]).toEqual({
            type: FilterActionTypes.CHANGE_SELECTED_CATEGORY,
            payload: newCategory
        });
        expect(dispatch.mock.calls[1][0]).toEqual(mockFetchRestaurants);
    });
});