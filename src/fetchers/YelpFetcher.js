
import { getQueryParameters } from '../util/GetQueryParameters';
import JsonFetcher from './JsonFetcher';
import filterByUSRestaurantCategories from './fetcherUtils/FilterByUSRestaurantCategories';

const localServerBaseUrl = 'http://localhost:1234';

class YelpFetcher {
    constructor(baseUrl = localServerBaseUrl, jsonFetcher = new JsonFetcher()) {
        this.baseUrl = baseUrl;
        this.fetchJson = jsonFetcher.fetchJson;
    }

    fetchUSRestaurantCategories() {
        return this.fetchJson(`${this.baseUrl}/categories`)
            .then(categoriesJson => filterByUSRestaurantCategories(categoriesJson));
    }

    fetchRestaurants(category) {
        const queryParams = getQueryParameters({
            category,
            term: 'restaurants',
            location: 'Las Vegas',
        });

        return this.fetchJson(`${this.baseUrl}/businesses/search${queryParams}`);
    }

    fetchRestaurant(restaurantId) {
        if (restaurantId)
            return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}`);
        else
            return Promise.reject(new Error('fetchRestaurant: Invalid restaurantId!'));
    }

    fetchRestaurantReviews(restaurantId) {
        if (restaurantId)
            return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}/reviews`);
        else
            return Promise.reject(new Error('fetchRestaurantReviews: Invalid restaurantId!'));
    }
}

export default YelpFetcher;