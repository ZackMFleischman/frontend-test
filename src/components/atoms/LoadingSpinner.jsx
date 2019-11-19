import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './LoadingSpinner.scss';

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            <Loader
                type="Oval"
                color="#021E44"
                height={ 100 }
                width={ 100 }
            />
        </div>
    );
};

export default LoadingSpinner;