import React from 'react';
import { PropTypes } from 'prop-types';
import './OpenIndicator.scss';

const OpenIndicator = props => {
    const getText = () => {
        if (props.big) return props.isOpen ? 'Open Now' : 'Closed';
        else return props.isOpen ? 'OPEN NOW' : 'CLOSED';
    };

    const getClassNames = () => {
        let classNames = 'open-now-circle';
        classNames += `${props.isOpen ? ' green' : ' red'}`;
        classNames += `${props.big ? ' big' : ''}`;
        return classNames;
    }

    return (
        <div className='open-now-wrapper'>
            <div className={ getClassNames() } >●</div>
            <div>{ getText() }</ div>
        </div >
    );
}

OpenIndicator.propTypes = {
    isOpen: PropTypes.bool,
    big: PropTypes.bool
};

export default OpenIndicator;