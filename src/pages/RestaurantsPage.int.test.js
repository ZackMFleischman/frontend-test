import React from 'react';
import RestaurantsPage from './RestaurantsPage';
import { getTestReduxState } from '../testUtils/TestReduxState';
import mountWithRedux from '../testUtils/MountWithRedux';
import { clickTestId, clickTestIdAndUpdate } from '../testUtils/TestHelpers';
import { initialFilterState } from '../reducers/FilterReducer';

describe('Restaurants Page Integration Tests', () => {
    const mockHeaderCopy = { title: 'Title', description: 'Description' };

    const mountRestaurantsPageWithRedux = (reduxStateOverrides = {}) => {
        const initialState = { ...getTestReduxState(), ...reduxStateOverrides };
        const props = { headerCopy: mockHeaderCopy };

        return mountWithRedux(RestaurantsPage, props, initialState);
    };

    const getDisplayedRestaurants = (page) => page.find('RestaurantCardsSection').prop('restaurants');

    test('Clicking the Clear All button clears the filters', () => {
        const { wrapper: page, store } = mountRestaurantsPageWithRedux({
            filters: {
                selectedCategory: 'all',
                selectedPrice: '$',
                onlyShowOpenNow: true
            },
        });

        expect(store.getState().filters).not.toEqual(initialFilterState);
        clickTestId(page, 'clearAll');
        expect(store.getState().filters).toEqual(initialFilterState);
    });

    test('Changing the price filters restaurants', () => {
        const { wrapper: page } = mountRestaurantsPageWithRedux();

        const restaurantsBefore = getDisplayedRestaurants(page);
        clickTestIdAndUpdate(page, 'PriceFilter'); // Open the dropdown
        clickTestIdAndUpdate(page, 'PriceFilter-$'); // Click the $ option
        const restaurantsAfter = getDisplayedRestaurants(page);

        // Only single dollar restaurants should be displayed.
        const singleDollarRestaurants = restaurantsAfter.filter(restaurant => restaurant.price === '$');
        expect(singleDollarRestaurants.length).toEqual(restaurantsAfter.length);

        // Displayed restaurants should be less.
        expect(restaurantsAfter.length).toBeLessThan(restaurantsBefore.length);
    });
});