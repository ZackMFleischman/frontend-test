import React from 'react';
import { PropTypes } from 'prop-types';

class RadioButton extends React.PureComponent {
    renderRadioIcon = () => {
        return this.props.isSelected ?
            <span>⦿</span> :
            <span>○</span>
    }

    render() {
        return (
            <div className='radio-button' onClick={ () => this.props.onToggle() }>
                { this.renderRadioIcon() }
                <span>{ this.props.text }</span>
            </div >
        );
    }
}

RadioButton.propTypes = {
    isSelected: PropTypes.bool,
    text: PropTypes.string,
    onToggle: PropTypes.func
};

export default RadioButton; 