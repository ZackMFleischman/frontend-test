export const transformRawRestaurantsData = (rawRestaurantsData, category, offset) => {
    if (!rawRestaurantsData || !rawRestaurantsData.businesses) throw new Error('Bad restaurants data!')

    const restaurantsArray = rawRestaurantsData.businesses;
    const numRestaurantsFetched = restaurantsArray.length;
    const restaurantMap = restaurantArrayToMap(restaurantsArray);
    const currentOffsetForCategory = offset + numRestaurantsFetched;
    const canLoadMore = (rawRestaurantsData.total - currentOffsetForCategory) !== 0;

    return {
        currentCategory: category,
        restaurantMap,
        currentOffsetForCategory,
        canLoadMore
    };
};

export const transformRawRestaurantData = (rawRestaurantData) => {
    return {
        restaurantMap: {
            [rawRestaurantData.alias]: rawRestaurantData
        }
    };
};

const restaurantArrayToMap = (restaurants) => restaurants.reduce((restaurantMap, restaurant) => {
    restaurantMap[restaurant.alias] = restaurant
    return restaurantMap;
}, {});