import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const OpenNowFilter = (props) => {
    return (
        <RadioButton
            isSelected={ props.isSelected }
            text='Open Now'
            onToggle={ props.toggleShowOpenNow }
        />
    );
};

OpenNowFilter.propTypes = {
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    toggleShowOpenNow: PropTypes.func
};

export default OpenNowFilter;