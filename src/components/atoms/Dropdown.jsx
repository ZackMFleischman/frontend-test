import React from 'react';
import { PropTypes } from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import combineClasses from '../../util/CombineClasses';
import './Dropdown.scss';
import LoadingSpinner from './LoadingSpinner';

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

    collapseDropdown = () => {
        if (this.state.isOpen)
            this.setState({ isOpen: false });
    }

    handleClickOutside = () => {
        this.collapseDropdown();
    };

    renderChevron = () => {
        const chevronClassName = combineClasses([
            'dropdown-chevron',
            (this.state.isOpen ? 'chevron-up' : 'chevron-down')
        ]);

        return (
            <div className={ 'dropdown-chevron-wrapper' }>
                <div className={ chevronClassName } />
            </div>
        );
    }

    getSizeClass = () => {
        if (this.props.sizeSmall) return 'small';
        return 'large'; // default
    }

    renderHeader = () => {
        const headerClassName = combineClasses(['dropdown-header', this.getSizeClass()]);

        return (
            <div className={ headerClassName } onClick={ this.toggleDropdown }>
                <div className='dropdown-header-title'>{ this.props.title }</div>
                { this.renderChevron() }
            </div>
        );
    }

    renderItemList = () => {
        const itemListClassName = combineClasses([
            'dropdown-item-list',
            this.getSizeClass(),
            (this.state.isOpen ? 'dropdown-open' : 'dropdown-collapsed')
        ]);

        return (
            <div className={ itemListClassName }>
                { this.renderItemListContent() }
            </div>
        );
    };

    renderItemListContent = () => {
        return !this.props.isLoading
            ? this.props.items.map(this.renderItem)
            : <LoadingSpinner small />
    }

    renderItem = (item) => {
        return (
            <div className='dropdown-list-item' key={ item.id } onClick={ () => this.props.onDropdownItemClicked(item) }>
                {
                    item.isSelected
                        ? <img src='CheckedCircle.png' />
                        : <img src='EmptyCircle.png' />
                }
                <span className='dropdown-list-item-text'>{ item.text }</span>
            </div>
        );
    };

    render() {
        return (
            <div className='dropdown-wrapper'>
                { this.renderHeader() }
                { this.renderItemList() }
            </div >
        );
    }
}

Dropdown.propTypes = {
    isLoading: PropTypes.bool,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        isSelected: PropTypes.bool,
    })),
    onDropdownItemClicked: PropTypes.func,
    sizeSmall: PropTypes.bool
};

export default onClickOutside(Dropdown);