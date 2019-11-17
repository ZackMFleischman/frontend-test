import YelpFetcher from './YelpFetcher';

describe('YelpFetcher tests', () => {
    const baseUrl = 'http://baseUrl.com';
    const getExpectedUrl = (path) => `${baseUrl}${path}`;
    const fetchJson = jest.fn().mockResolvedValue({});
    const mockJsonFetcher = { fetchJson };
    const yelpFetcher = new YelpFetcher(baseUrl, mockJsonFetcher);

    beforeEach(() => fetchJson.mockReset());

    it('fetchCategories should fetch the right url', async () => {
        console.log("Environment Vars: %o", process.env);
        const expectedUrl = getExpectedUrl('/categories');
        await yelpFetcher.fetchAmericanRestaurantCategories();
        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurants should fetch the right url without a category', async () => {
        const expectedUrl = getExpectedUrl('/businesses/search?term=restaurants&location=Las%20Vegas');
        await yelpFetcher.fetchRestaurants();
        expect(fetchJson).toHaveBeenCalledWith(expectedUrl);
    });

    it('fetchRestaurants should fetch the right url with a category', async () => {
        const category = 'Japanese';
        const expectedUrl = getExpectedUrl(`/businesses/search?category=${category}&term=restaurants&location=Las%20Vegas`);

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