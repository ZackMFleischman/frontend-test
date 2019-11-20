import React from 'react';
import ReactStars from 'react-stars';

const Stars = props => {
    return (
        <ReactStars
            count={ 5 }
            edit={ false }
            value={ props.numStars }
            size={ 20 }
            color1={ 'grey' }
            color2={ '#021E44' }
        />
    );
}

export default Stars;