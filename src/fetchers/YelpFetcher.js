import { getQueryParameters } from '../util/GetQueryParameters';
import JsonFetcher from './JsonFetcher';
import filterByUSRestaurantCategories from './fetcherUtils/FilterByUSRestaurantCategories';
import { transformRawRestaurantsData, transformRawRestaurantData } from './fetcherUtils/TransformRawRestaurantData';

export const restaurantsFetchedPerRequest = 20; // Limit

class YelpFetcher {
    constructor(baseUrl, jsonFetcher = new JsonFetcher()) {
        this.baseUrl = baseUrl;
        this.fetchJson = jsonFetcher.fetchJson;
    }

    fetchUSRestaurantCategories() {
        return this.fetchJson(`${this.baseUrl}/categories`)
            .then(categoriesJson => filterByUSRestaurantCategories(categoriesJson));
    }

    fetchRestaurants(category, offset = 0) {
        const queryParams = getQueryParameters({
            categories: category,
            limit: restaurantsFetchedPerRequest.toString(),
            offset: offset !== 0 ? offset.toString() : undefined,
            term: 'restaurants',
            location: 'Las Vegas',
        });

        return this.fetchJson(`${this.baseUrl}/businesses/search${queryParams}`)
            .then(rawRestaurantsData => transformRawRestaurantsData(rawRestaurantsData, category, offset));
    }

    fetchRestaurant(restaurantId) {
        if (restaurantId)
            return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}`)
                .then(rawRestaurantData => transformRawRestaurantData(rawRestaurantData));
        else
            return Promise.reject(new Error('fetchRestaurant: Invalid restaurantId!'));
    }

    fetchRestaurantReviews(restaurantId) {
        if (restaurantId)
            return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}/reviews`)
                .then(rawReviewsData => ({ [restaurantId]: rawReviewsData }));
        else
            return Promise.reject(new Error('fetchRestaurantReviews: Invalid restaurantId!'));
    }
}

export default YelpFetcher;