import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onCounterButtonClicked } from '../actions/CounterButtonActions';

export const CounterButton = (props) => {
    return <button onClick={ props.onCounterButtonClicked }>Counter: { props.counter }</button>;
};

CounterButton.propTypes = {
    counter: PropTypes.number,
    onClick: PropTypes.func
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    onCounterButtonClicked
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterButton);