import React from 'react';
import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { changeSelectedCategory } from '../actions/FilterActions';
import { getCategoriesToDisplay } from '../selectors/FilterSelectors';

class CategoryFilterContainer extends React.PureComponent {
    render() {
        return (
            <CategoryFilter
                categories={ this.props.categories }
                selectedCategory={ this.props.selectedCategory }
                changeSelectedCategory={ this.props.changeSelectedCategory }
            />
        );
    }
}

const mapStateToProps = (state) => ({
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