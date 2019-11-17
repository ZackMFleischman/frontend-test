import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const withLoader = (Component) => {
    return ({ isLoading, otherProps }) => {
        if (isLoading)
            return <LoadingSpinner />;
        else
            return <Component { ...otherProps } />;
    }
}

export default withLoader;