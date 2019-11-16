import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { rootReducer } from './reducers/RootReducer';

const reduxStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ reduxStore }>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
