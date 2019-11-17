
import { getQueryParameters } from '../util/GetQueryParameters';
import isomorphicFetch from 'isomorphic-fetch';

class YelpFetcher {
    constructor(baseUrl = 'http://localhost:1234', fetch = isomorphicFetch) {
        this.baseUrl = baseUrl;
        this.fetch = fetch;
    }

    fetchJson = (url) => this.fetch(url)
        .then(response => response.json());

    fetchCategories() {
        return this.fetchJson(`${this.baseUrl}/categories`);
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
        return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}`);
    }

    fetchRestaurantReviews(restaurantId) {
        return this.fetchJson(`${this.baseUrl}/businesses/${restaurantId}/reviews`);
    }
}

export default YelpFetcher;