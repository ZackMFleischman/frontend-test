import React from 'react';
import Button from '../atoms/Button';
import { PropTypes } from 'prop-types';

const ClearAllFiltersButton = ({ clearAllFilters, disabled }) => (
    <Button
        text='CLEAR ALL'
        disabled={ disabled }
        onClick={ () => clearAllFilters() }
    />
);

ClearAllFiltersButton.propTypes = {
    disabled: PropTypes.bool,
    clearAllFilters: PropTypes.func
};

export default ClearAllFiltersButton;