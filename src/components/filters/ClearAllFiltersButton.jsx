import React from 'react';
import Button from '../atoms/Button';
import { PropTypes } from 'prop-types';

const ClearAllFiltersButton = ({ clearAllFilters, disabled }) => (
    <div style={ { paddingRight: '15px' } }>
        <Button
            text='CLEAR ALL'
            disabled={ disabled }
            onClick={ () => clearAllFilters() }
        />
    </div>
);

ClearAllFiltersButton.propTypes = {
    disabled: PropTypes.bool,
    clearAllFilters: PropTypes.func
};

export default ClearAllFiltersButton;