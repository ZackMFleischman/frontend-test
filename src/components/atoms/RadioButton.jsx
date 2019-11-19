import React from 'react';
import { PropTypes } from 'prop-types';
import './RadioButton.scss';
import RadioButtonIcon from './RadioButtonIcon';

class RadioButton extends React.PureComponent {
    render() {
        return (
            <div className='radio-button' style={ this.props.style } onClick={ () => this.props.onToggle() }>
                <RadioButtonIcon isSelected={ this.props.isSelected } />
                <div className='radio-button-text'>{ this.props.text }</div>
            </div >
        );
    }
}

RadioButton.propTypes = {
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    onToggle: PropTypes.func,
    style: PropTypes.object
};

export default RadioButton; 