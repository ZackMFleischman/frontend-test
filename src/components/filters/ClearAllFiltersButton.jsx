import React from 'react';
import { connect } from 'react-redux';
import { clearAllFilters } from '../../actions/FilterActions';

const ClearAllFiltersButton = ({ clearAllFilters }) => {
    return <button onClick={ () => clearAllFilters() }>CLEAR ALL</button>;
}

export default connect(null, { clearAllFilters })(ClearAllFiltersButton);