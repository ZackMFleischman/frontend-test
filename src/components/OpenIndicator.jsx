import React from 'react';
import { PropTypes } from 'prop-types';
import './OpenIndicator.scss';

const OpenIndicator = props => (
    <div className='open-now-wrapper'>
        <div className={ `open-now-circle ${props.isOpen ? 'green' : 'red'}` } >●</div>
        <div>{ props.isOpen ? 'OPEN NOW' : 'CLOSED' }</ div>
    </div >
);

OpenIndicator.propTypes = {
    isOpen: PropTypes.bool
};

export default OpenIndicator;