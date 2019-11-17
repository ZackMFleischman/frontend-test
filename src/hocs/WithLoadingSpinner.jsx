import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const withLoadingSpinner = (Component) => {
    class WithLoadingSpinner extends React.PureComponent {
        render() {
            const { isLoading, ...otherProps } = this.props;
            if (isLoading)
                return <LoadingSpinner />;
            else
                return <Component { ...otherProps } />;
        }
    }

    WithLoadingSpinner.displayName = `withLoadingSpinner(${Component.displayName})`;

    return WithLoadingSpinner;
}

export default withLoadingSpinner;