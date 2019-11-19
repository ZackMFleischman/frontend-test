import React from 'react';
import { PropTypes } from 'prop-types';
import './RadioButtonIcon.scss';

const RadioButtonIcon = (props) => {
    return (
        props.isSelected
            ? <img src={ 'SelectedCircle.png' } className='radio-icon-selected' alt='⦿' />
            : <img src={ 'EmptyCircle.png' } className='radio-icon-unselected' alt='○' />
    );
};

RadioButtonIcon.propTypes = {
    isSelected: PropTypes.bool
};

export default RadioButtonIcon;