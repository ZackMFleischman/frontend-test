import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const withLoader = (Component) => {
    class WithLoader extends React.PureComponent {
        render() {
            const { isLoading, ...otherProps } = this.props;
            if (isLoading)
                return <LoadingSpinner />;
            else
                return <Component { ...otherProps } />;
        }
    }

    WithLoader.displayName = `withLoader(${Component.displayName})`;

    return WithLoader;
}

export default withLoader;