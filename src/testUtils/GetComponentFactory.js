import React from 'react';
import { shallow, mount } from 'enzyme';

const getComponentFactory = (Component, defaultProps) => {
    return {
        getShallow: (props) => shallow(<Component { ...defaultProps } { ...props } />),
        getMounted: (props) => mount(<Component { ...defaultProps } { ...props } />),
    };
};

export default getComponentFactory;