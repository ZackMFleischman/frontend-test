import React from 'react';
import './Button.scss';
import { PropTypes } from 'prop-types';
import combineClasses from '../../util/CombineClasses';

const Button = (props) => {
    const buttonClass = combineClasses([
        'button',
        props.large && 'large',
        props.className
    ]);

    return (
        <button
            className={ buttonClass }
            onClick={ props.onClick }
        >
            { props.text }
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    large: PropTypes.bool,
};

export default Button;