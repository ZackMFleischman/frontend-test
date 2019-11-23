import filterByUSRestaurantCategories from './FilterByUSRestaurantCategories';

describe('Filter by US restaurant categories tests', () => {
    const getCategoriesJson = (numCategories) => {
        const getCategory = () => ({
            parent_aliases: ['restaurants'],
            country_blacklist: [],
            country_whitelist: []
        });

        let categories = [];
        for (let i = 0; i < numCategories; ++i)
            categories.push(getCategory());

        return { categories };
    };

    it('should filter out categories who dont have restaurants as a parent alias', () => {
        const json = getCategoriesJson(3);
        json.categories[1].parent_aliases = [];

        const filteredCategories = filterByUSRestaurantCategories(json);
        expect(filteredCategories).toHaveLength(2);
        expect(filteredCategories.map(c => c.parent_aliases[0])).toEqual(['restaurants', 'restaurants']);
    });

    it('should filter out categories who have US in the black list', () => {
        const json = getCategoriesJson(3);
        json.categories[1].country_blacklist = ['US'];
        json.categories[2].country_blacklist = ['US'];

        const filteredCategories = filterByUSRestaurantCategories(json);
        expect(filteredCategories[0]).toEqual(json.categories[0]);
        expect(filteredCategories).toHaveLength(1);
    });

    it('should filter out categories who dont have US in the white list and the white list is not empty', () => {
        const json = getCategoriesJson(3);
        json.categories[1].country_whitelist = ['CAN'];

        const filteredCategories = filterByUSRestaurantCategories(json);
        expect(filteredCategories).toHaveLength(2);
    });

    it('should not filter out US if its in the whitelist', () => {
        const json = getCategoriesJson(3);
        json.categories[1].country_whitelist = ['US'];

        const filteredCategories = filterByUSRestaurantCategories(json);
        expect(filteredCategories).toHaveLength(3);
    });
});