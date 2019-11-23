import React from 'react';
import { PropTypes } from 'prop-types';
import './RestaurantMapAndImages.scss';

const RestaurantMapAndImages = (props) => {
    const { photos, location } = props;
    const getLocation = () => location.display_address.join(', ');

    return (
        <div style={ { display: 'flex', flexDirection: 'column' } } >
            <div style={ { display: 'flex' } }>
                { photos.map(photo => <img key={ photo } src={ photo } className='restaurant-image' alt='Restaurant Photo' />) }
            </div>
            <span className='location-text'>{ getLocation() }</span>
        </div>
    );
};

RestaurantMapAndImages.propTypes = {
    coordinates: PropTypes.object,
    location: PropTypes.object,
    photos: PropTypes.arrayOf(PropTypes.string)
};

export default RestaurantMapAndImages;