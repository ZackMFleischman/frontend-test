import JsonFetcher from './JsonFetcher';

describe('JsonFetcher tests', () => {
    const getMockedResponse = value => ({ json: async () => value });

    const getMockFetch = value => jest.fn()
        .mockResolvedValue(getMockedResponse(value));

    const getJsonFetcher = value => new JsonFetcher(getMockFetch(value));

    it('should return a promise of response.json', async () => {
        const expectedResponse = { body: 'response body' };
        const jsonFetcher = getJsonFetcher(expectedResponse);

        expect(await jsonFetcher.fetchJson('url')).toBe(expectedResponse);
    });
});