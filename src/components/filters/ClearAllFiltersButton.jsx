import React from 'react';
import { connect } from 'react-redux';
import { clearAllFilters } from '../../actions/FilterActions';
import Button from '../atoms/Button';
import { PropTypes } from 'prop-types';

const ClearAllFiltersButton = ({ clearAllFilters }) => {
    return <Button text='CLEAR ALL' onClick={ () => clearAllFilters() } />;
}

ClearAllFiltersButton.propTypes = {
    clearAllFilters: PropTypes.func
};

export default connect(null, { clearAllFilters })(ClearAllFiltersButton);