import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../atoms/Dropdown';

const PriceFilter = (props) => {
    const handlePriceItemClicked = (price) => props.changeSelectedPrice(price.id);

    const toPriceItem = (price) => ({
        id: price.toLowerCase(),
        text: price,
        isSelected: price.toLowerCase() === props.selectedPrice
    });

    const getPriceItems = () => ['All', '$', '$$', '$$$', '$$$$'].map(toPriceItem);

    return (
        <Dropdown
            title='Price'
            onDropdownItemClicked={ handlePriceItemClicked }
            items={ getPriceItems() }
            sizeSmall
            disableScroll
            testId='PriceFilter'
        />
    );
};

PriceFilter.propTypes = {
    selectedPrice: PropTypes.string,
    changeSelectedPrice: PropTypes.func
};

export default PriceFilter;