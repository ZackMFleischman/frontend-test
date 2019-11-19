import { getOnlyShowOpenNow, getPriceFilter } from "./FilterSelectors";
import { loadingFinished } from '../reducers/reducerUtils/LoadingStatus';

export const getRestaurantMap = (state) => {
    if (state.yelp.restaurants.data)
        return state.yelp.restaurants.data.restaurantMap;
    else
        return {};
}

export const getCurrentRestaurantCategory = (state) => {
    return state.filters && state.filters.selectedCategory;
}

export const getCanLoadMore = (state) => state.yelp.restaurants.data && state.yelp.restaurants.data.canLoadMore;

const categoriesNotLoaded = (state) => !loadingFinished(state.yelp.categories.loadingStatus);

export const getCurrentRestaurantCategoryDisplayText = (state) => {
    const currentCategory = getCurrentRestaurantCategory(state);
    console.log('categories not loaded ' + categoriesNotLoaded(state));
    console.log('currentCat: ' + currentCategory);
    if (categoriesNotLoaded(state) || !currentCategory || currentCategory === 'all') {
        return 'All Restaurants';
    } else {
        const categoryData = state.yelp.categories.data.find(category => category.alias === currentCategory);
        return categoryData.title;
    }
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