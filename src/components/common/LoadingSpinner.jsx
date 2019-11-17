import React from 'react';
import Loader from 'react-loader-spinner';
import './node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            <Loader
                type="Oval"
                color="#021E44"
                height={ 200 }
                width={ 200 }
            />
        </div>
    );
};

export default LoadingSpinner;