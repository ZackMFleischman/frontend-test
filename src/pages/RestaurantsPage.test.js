import RestaurantsPage from './RestaurantsPage';
import getComponentFactory from '../testUtils/GetComponentFactory';

describe('RestaurantsPageContainer tests', () => {
    const mockHeaderCopy = { title: 'title', description: 'description' };
    const { getShallow } = getComponentFactory(RestaurantsPage, {
        headerCopy: mockHeaderCopy
    });

    it('Should pass the correct data into the header', () => {
        const header = getShallow().find('Header');
        expect(header.prop('title')).toBe(mockHeaderCopy.title);
        expect(header.prop('description')).toBe(mockHeaderCopy.description);
    });

    it('Should match a snapshot', () => {
        // TODO: Match a snapshot here
    });
});