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
            disabled={ props.disabled }
        >
            { props.text }
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    large: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
    large: false
};

export default Button;