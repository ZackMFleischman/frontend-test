import React from 'react';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeSelectedCategory } from '../../actions/FilterActions';
import { getCategoriesToDisplay } from '../../selectors/FilterSelectors';

const CategoryFilterContainer = (props) => {
    return <CategoryFilter { ...props } />;
};

const mapStateToProps = (state) => ({
    categoriesLoadingStatus: state.yelp.categories.loadingStatus,
    categories: getCategoriesToDisplay(state),
    selectedCategory: state.filters.selectedCategory
});

const mapDispatchToProps = {
    changeSelectedCategory
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryFilterContainer);