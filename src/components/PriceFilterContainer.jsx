import React from 'react';
import { connect } from 'react-redux';
import { changeSelectedPrice } from '../actions/FilterActions';
import PriceFilter from './PriceFilter';

class PriceFilterContainer extends React.PureComponent {
    render() {
        return (
            <PriceFilter
                selectedPrice={ this.props.selectedPrice }
                changeSelectedPrice={ this.props.changeSelectedPrice }
            />
        );
    }
}

const mapStateToProps = (state) => ({
    selectedPrice: state.filters.selectedPrice
});

const mapDispatchToProps = {
    changeSelectedPrice
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceFilterContainer);