import { getOnlyShowOpenNow, getPriceFilter } from "./FilterSelectors";

export const getRestaurantMap = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.restaurantMap;
    else
        return {};
}

export const getCurrentRestaurantCategory = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.currentCategory;
    else
        return undefined;
}

export const getCurrentRestaurantCategoryDisplayText = (state) => {
    const currentCategory = getCurrentRestaurantCategory(state);
    if (!currentCategory || !state.yelp.categories.data || currentCategory === 'all') return 'All Restaurants';
    const categoryData = state.yelp.categories.data.find(category => category.alias === currentCategory);
    return categoryData.title + ' Restaurants';
}

export const getCurrentRestaurantOffset = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.currentOffsetForCategory
    else
        return 0;
}

export const getFilteredRestaurants = (state) => {
    const priceFilter = getPriceFilter(state);
    const onlyShowOpenNow = getOnlyShowOpenNow(state);

    return _getArrayOfAllRestaurants(state)
        .filter(restaurant => (
            passesPriceFilter(restaurant, priceFilter) &&
            passesOnlyShowOpenNowFilter(restaurant, onlyShowOpenNow)
        ));
}

const passesPriceFilter = (restaurant, priceFilter) => priceFilter === 'all' || restaurant.price === priceFilter;
const passesOnlyShowOpenNowFilter = (restaurant, onlyShowOpenNow) => !onlyShowOpenNow || !restaurant.is_closed;

const _getArrayOfAllRestaurants = (state) => {
    if (state.yelp.restaurants.data)
        return Object.values(state.yelp.restaurants.data.restaurantMap);
    else
        return [];
};