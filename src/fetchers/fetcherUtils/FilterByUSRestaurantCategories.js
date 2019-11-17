const filterByUSRestaurantCategories = (categoriesJson) => {
    return categoriesJson.categories.filter(category => {
        const isRestaurantCategory = category.parent_aliases.includes('restaurants');
        const isInBlacklist = category.country_blacklist.includes('US');
        const isInWhitelist = category.country_whitelist.includes('US');
        const whiteListIsEmpty = category.country_whitelist.length === 0;

        return (
            isRestaurantCategory &&
            !isInBlacklist &&
            (whiteListIsEmpty || isInWhitelist)
        );
    });
}

export default filterByUSRestaurantCategories;