import React from 'react';
import { PropTypes } from 'prop-types';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    }

    renderHeader = () => {
        return (
            <div className='dropdown-header' onClick={ this.toggleDropdown }>
                <div className='dropdown-header-title'>{ this.props.title }</div>
                <div className='dropdown-chevron' />
            </div>
        );
    };

    renderItemList = () => {
        return (
            <div className='dropdown-item-list'>
                { this.props.items.map(this.renderItem) }
            </div>
        );
    };

    renderItem = (item) => {
        return (
            <div className='dropdown-list-item' key={ item.id } onClick={ () => this.props.onDropdownItemClicked(item) }>
                {
                    item.isSelected
                        ? <span>S - </span>
                        : <span>U - </span>
                }
                <span>{ item.text }</span>
            </div>
        );
    };

    render() {
        return (
            <div className='dropdown-wrapper'>
                { this.renderHeader() }
                { this.state.isOpen && this.renderItemList() }
            </div >
        );
    }
}

Dropdown.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        isSelected: PropTypes.bool,
    })),
    onDropdownItemClicked: PropTypes.func
};

export default Dropdown;