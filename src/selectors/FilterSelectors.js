
export const getCategoriesToDisplay = (state) => {
    const allCategory = {
        alias: 'all',
        title: 'All'
    };
    const otherCategories = state.yelp.categories.data || [];

    return [allCategory, ...otherCategories];
};

export const getCategoryFilter = (state) => state.filters.selectedCategory;
export const getPriceFilter = (state) => state.filters.selectedPrice;
export const getOnlyShowOpenNow = (state) => state.filters.onlyShowOpenNow;
