import React from 'react';
import ReactStars from 'react-stars';
import { PropTypes } from 'prop-types';

const Stars = props => {
    return (
        <ReactStars
            count={ 5 }
            edit={ false }
            value={ props.numStars }
            size={ props.big ? 32 : 20 }
            color1={ 'grey' }
            color2={ '#021E44' }
        />
    );
}

Stars.propTypes = {
    numStars: PropTypes.number,
    big: PropTypes.bool
}

export default Stars;