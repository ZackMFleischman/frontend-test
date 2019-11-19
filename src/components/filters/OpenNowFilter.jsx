import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../atoms/RadioButton';

const OpenNowFilter = (props) => {
    return (
        <RadioButton
            isSelected={ props.isSelected }
            text='Open Now'
            onToggle={ props.toggleShowOpenNow }
            style={ { minWidth: '90px' } }
        />
    );
};

OpenNowFilter.propTypes = {
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    toggleShowOpenNow: PropTypes.func
};

export default OpenNowFilter;