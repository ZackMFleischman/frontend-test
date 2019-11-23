import YelpFetcher, { restaurantsFetchedPerRequest } from './YelpFetcher';

describe('YelpFetcher tests', () => {
    let fetchJson;
    let yelpFetcher;

    const baseUrl = 'http://baseUrl.com';
    const getExpectedUrl = (path) => `${baseUrl}${path}`;

    const mockRestaurantsJson = ({
        total: 100,
        businesses: [{ alias: 'a' }, { alias: 'b' }, { alias: 'c' }]
    });


    beforeEach(() => {
        fetchJson = jest.fn(() => { return Promise.resolve({}); });
        yelpFetcher = new YelpFetcher(baseUrl, { fetchJson });
    });

    it('fetchCategories should fetch the right url', async () => {
        const expectedUrl = getExpectedUrl('/categories');
        await yelpFetcher.fetchUSRestaurantCategories();
        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurants should fetch the right url without a category', async () => {
        const expectedUrl = getExpectedUrl(`/businesses/search?limit=${restaurantsFetchedPerRequest}&term=restaurants&location=Las%20Vegas`);
        fetchJson.mockResolvedValue(mockRestaurantsJson);
        await yelpFetcher.fetchRestaurants();
        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurants should throw if it doesnt get good data', async () => {
        await expect(yelpFetcher.fetchRestaurants()).rejects.toThrow();
    });

    it('fetchRestaurants should fetch the right url with a category', async () => {
        const category = 'Japanese';
        const expectedUrl = getExpectedUrl(`/businesses/search?categories=${category}&limit=${restaurantsFetchedPerRequest}&term=restaurants&location=Las%20Vegas`);

        fetchJson.mockResolvedValue(mockRestaurantsJson);
        await yelpFetcher.fetchRestaurants(category);

        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurantReviews should fetch the right url given a restaurant ID', async () => {
        const restaurantId = 'test-restaurant-id';
        const expectedUrl = getExpectedUrl(`/businesses/${restaurantId}/reviews`);

        await yelpFetcher.fetchRestaurantReviews(restaurantId);

        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurantReviews should throw if given an undefined id', async () => {
        await expect(yelpFetcher.fetchRestaurantReviews()).rejects.toThrow();
    });

    it('fetchRestaurant should fetch the right url given a restaurant ID', async () => {
        const restaurantId = 'test-restaurant-id';
        const expectedUrl = getExpectedUrl(`/businesses/${restaurantId}`);

        await yelpFetcher.fetchRestaurant(restaurantId);

        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurant should throw if given an undefined id', async () => {
        await expect(yelpFetcher.fetchRestaurant()).rejects.toThrow();
    });
});