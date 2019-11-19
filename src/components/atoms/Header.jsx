import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className={ props.className }>
            <h1 className='header'>{ props.title }</h1>
            <div className='description'>{ props.description }</div>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string
}

export default Header;