export const transformRawRestaurantsData = (rawRestaurantsData, category, offset) => {
    const restaurantsArray = rawRestaurantsData.businesses;
    const numRestaurantsFetched = restaurantsArray.length;
    const restaurantMap = restaurantArrayToMap(restaurantsArray);

    return {
        currentOffsetForCategory: offset + numRestaurantsFetched,
        currentCategory: category,
        restaurantMap
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