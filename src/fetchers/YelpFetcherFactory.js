import YelpFetcher from './YelpFetcher';

// This will be mocked out for integration tests.
export const getYelpFetcher = () => new YelpFetcher(process.env.SERVER_URL);