export const transformRawRestaurantData = (rawRestaurantData, category, offset) => {
    const restaurantsArray = rawRestaurantData.businesses;
    const numRestaurantsFetched = restaurantsArray.length;
    const restaurantMap = restaurantArrayToMap(restaurantsArray);

    return {
        currentOffsetForCategory: offset + numRestaurantsFetched,
        currentCategory: category,
        restaurantMap
    };
};

const restaurantArrayToMap = (restaurants) => restaurants.reduce((restaurantMap, restaurant) => {
    restaurantMap[restaurant.alias] = restaurant
    return restaurantMap;
}, {});