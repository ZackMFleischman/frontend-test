
export const getCategoriesToDisplay = (state) => {
    const allCategory = {
        alias: 'all',
        title: 'All'
    };
    const otherCategories = state.yelp.categories.data || [];

    return [allCategory, ...otherCategories];
};