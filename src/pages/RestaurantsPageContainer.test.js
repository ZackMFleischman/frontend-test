import LoadingStatus from '../reducers/reducerUtils/LoadingStatus';
import { RestaurantsPageContainer } from './RestaurantsPageContainer';
import getComponentFactory from '../testUtils/GetComponentFactory';

describe('RestaurantsPageContainer tests', () => {
    const fetchCategories = jest.fn();
    const fetchRestaurants = jest.fn();
    const mockHeaderCopy = { title: 'title', description: 'description' };

    const { getShallow } = getComponentFactory(RestaurantsPageContainer, {
        categoriesLoadingStatus: LoadingStatus.NOT_LOADED,
        restaurantsLoadingStatus: LoadingStatus.NOT_LOADED,
        fetchCategories,
        fetchRestaurants,
        headerCopy: mockHeaderCopy
    });

    beforeEach(() => {
        fetchCategories.mockClear();
        fetchRestaurants.mockClear();
    });

    it('should fetchCategories on mount if it hasnt yet', () => {
        getShallow({ categoriesLoadingStatus: LoadingStatus.NOT_LOADED });
        expect(fetchCategories).toHaveBeenCalled();
    });

    it('should fetchCategories on mount if errored out before', () => {
        getShallow({ categoriesLoadingStatus: LoadingStatus.LOADING_ERROR });
        expect(fetchCategories).toHaveBeenCalled();
    });

    it('should NOT fetchCategories on mount if it is already loading', () => {
        getShallow({ categoriesLoadingStatus: LoadingStatus.LOADING });
        expect(fetchCategories).not.toHaveBeenCalled();
    });

    it('should NOT fetchCategories on mount if it is already loaded', () => {
        getShallow({ categoriesLoadingStatus: LoadingStatus.LOADED_SUCCESSFULLY });
        expect(fetchCategories).not.toHaveBeenCalled();
    });

    it('should fetchRestaurants on mount if it hasnt yet', () => {
        getShallow({ restaurantsLoadingStatus: LoadingStatus.NOT_LOADED });
        expect(fetchRestaurants).toHaveBeenCalled();
    });

    it('should fetchRestaurants on mount if errored out before', () => {
        getShallow({ restaurantsLoadingStatus: LoadingStatus.LOADING_ERROR });
        expect(fetchRestaurants).toHaveBeenCalled();
    });

    it('should NOT fetchRestaurants on mount if it is already loading', () => {
        getShallow({ restaurantsLoadingStatus: LoadingStatus.LOADING });
        expect(fetchRestaurants).not.toHaveBeenCalled();
    });

    it('should NOT fetchRestaurants on mount if it is already loaded', () => {
        getShallow({ restaurantsLoadingStatus: LoadingStatus.LOADED_SUCCESSFULLY });
        expect(fetchRestaurants).not.toHaveBeenCalled();
    });

    it('should render the RestaurantsPage with the appropriate header', () => {
        const wrapper = getShallow({ headerCopy: mockHeaderCopy });
        const pageWrapper = wrapper.find('RestaurantsPage');

        expect(pageWrapper).toHaveLength(1);
        expect(pageWrapper.prop('headerCopy')).toBe(mockHeaderCopy);
    });
});