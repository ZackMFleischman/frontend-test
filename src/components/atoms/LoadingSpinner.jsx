import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './LoadingSpinner.scss';
import { PropTypes } from 'prop-types';

const LoadingSpinner = (props) => {
    const getSize = () => {
        if (props.small) return 50;
        else return 100;
    }

    return (
        <div className='loading-spinner'>
            <Loader
                type="Oval"
                color="#021E44"
                height={ getSize() }
                width={ getSize() }
            />
        </div>
    );
};

LoadingSpinner.propTypes = {
    small: PropTypes.bool
};

LoadingSpinner.defaultProps = {
    small: false
};

export default LoadingSpinner;