import React from 'react';
import './Button.scss';
import { PropTypes } from 'prop-types';
import combineClasses from '../../util/CombineClasses';

const Button = (props) => {
    const buttonClass = combineClasses([
        'button',
        props.large && 'large',
        props.xlarge && 'x-large',
        props.invertedColors && 'inverted-colors',
        props.className
    ]);

    return (
        <button
            className={ buttonClass }
            onClick={ props.onClick }
            disabled={ props.disabled }
            data-test-id={ props.testId }
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
    xlarge: PropTypes.bool,
    invertedColors: PropTypes.bool,
    testId: PropTypes.string
};

Button.defaultProps = {
    disabled: false,
    large: false,
    xlarge: false,
    invertedColors: false
};

export default Button;