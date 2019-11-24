import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createReduxStore } from '../Store';
import { BrowserRouter as Router } from "react-router-dom";

const mountWithRedux = (Component, props, state) => {
    const store = createReduxStore(state);
    return {
        store,
        wrapper: mount(
            <Provider store={ store }>
                <Router>
                    <Component { ...props } />
                </Router>
            </Provider>
        )
    };
}

export default mountWithRedux;