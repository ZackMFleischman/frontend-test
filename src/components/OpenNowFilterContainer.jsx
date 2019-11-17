import React from 'react';
import { connect } from 'react-redux';
import { toggleShowOpenNow } from '../actions/FilterActions';
import OpenNowFilter from './OpenNowFilter';

const OpenNowFilterContainer = ({ isSelected, toggleShowOpenNow }) => {
    return (
        <OpenNowFilter
            isSelected={ isSelected }
            toggleShowOpenNow={ toggleShowOpenNow }
        />
    );
}

const mapStateToProps = (state) => ({
    isSelected: state.filters.onlyShowOpenNow
});

const mapDispatchToProps = {
    toggleShowOpenNow
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OpenNowFilterContainer);