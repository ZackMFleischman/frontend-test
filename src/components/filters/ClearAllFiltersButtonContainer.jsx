import React from 'react';
import { clearAllFilters } from '../../actions/FilterActions';
import ClearAllFiltersButton from './ClearAllFiltersButton';
import { connect } from 'react-redux';
import { areFiltersClear } from '../../selectors/FilterSelectors';

const ClearAllFiltersButtonContainer = (props) => (
    <ClearAllFiltersButton { ...props } />
);

const mapStateToProps = (state) => ({
    disabled: areFiltersClear(state)
});

const mapDispatchToProps = {
    clearAllFilters
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClearAllFiltersButtonContainer);