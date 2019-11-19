import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../atoms/Dropdown';
import { loadingFinished } from '../../reducers/reducerUtils/LoadingStatus';

const CategoryFilter = (props) => {
    const handleCategoryItemClicked = (category) => props.changeSelectedCategory(category.id);

    const categoryToDropdownItem = (category) => ({
        id: category.alias,
        text: category.title,
        isSelected: category.alias === props.selectedCategory
    });

    const getCategoryItems = () => props.categories ? props.categories.map(categoryToDropdownItem) : [];

    return (
        <Dropdown
            title='Categories'
            onDropdownItemClicked={ handleCategoryItemClicked }
            items={ getCategoryItems() }
            isLoading={ !loadingFinished(props.categoriesLoadingStatus) }
        />
    );
};

CategoryFilter.propTypes = {
    categoriesLoadingStatus: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({
        alias: PropTypes.string,
        title: PropTypes.string,
    })),
    selectedCategory: PropTypes.string,
    changeSelectedCategory: PropTypes.func
};

export default CategoryFilter;